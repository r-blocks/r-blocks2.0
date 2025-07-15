import Blockly from 'blockly';
import { quantitative_vars } from '../../constants';

// HELPrct-specific bootstrap CI for mean block
Blockly.Blocks['bootstrap_ci_mean'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('set.seed(')
      .appendField(new Blockly.FieldNumber(123, 1, 99999), 'SEED')
      .appendField(')');
    this.appendDummyInput()
      .appendField('mean_boot <- do(')
      .appendField(new Blockly.FieldNumber(5000, 10, 10000), 'ITERATIONS')
      .appendField(') * mean(~')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'VAR')
      .appendField(', data = resample(HELPrct))');
    this.appendDummyInput()
      .appendField('confint(mean_boot, level = (1 - ')
      .appendField(new Blockly.FieldNumber(0.05, 0.01, 0.99, 0.01), 'ALPHA')
      .appendField('), method = "quantile")  # ')
      .appendField(
        new Blockly.FieldDropdown([
          ['Two-sided', 'two_sided'],
          ['One-sided', 'one_sided'],
        ]),
        'TEST_TYPE'
      )
      .appendField(' test');

    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('230'); // Match color with other inference blocks
    this.setTooltip('Bootstrap confidence interval for one mean using HELPrct data');
    this.setHelpUrl('https://www.rdocumentation.org/packages/mosaic/topics/resample');
  },
};

// Generic version definition with proper implementation
Blockly.Blocks['Gbootstrap_ci_mean'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('set.seed(')
      .appendField(new Blockly.FieldNumber(123, 1, 99999), 'SEED')
      .appendField(')');
    this.appendDummyInput()
      .appendField('mean_boot <- do(')
      .appendField(new Blockly.FieldNumber(500, 10, 10000), 'ITERATIONS')
      .appendField(') * mean(~')
      .appendField(new Blockly.FieldTextInput(''), 'VAR')
      .appendField(', data = resample(')
      .appendField(new Blockly.FieldTextInput(''), 'DATASET')
      .appendField('))');
    this.appendDummyInput()
      .appendField('confint(mean_boot, level = (1 - ')
      .appendField(new Blockly.FieldNumber(0.05, 0.01, 0.99, 0.01), 'ALPHA')
      .appendField('), method = "quantile")  # ')
      .appendField(new Blockly.FieldTextInput(''), 'TEST_TYPE')
      .appendField(' test');

    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('230');
    this.setTooltip('Bootstrap confidence interval for one mean using selected dataset');
    this.setHelpUrl('https://www.rdocumentation.org/packages/mosaic/topics/resample');
  },
};

// Generator implementations stay the same
Blockly.JavaScript['bootstrap_ci_mean'] = function (block) {
  const seed = block.getFieldValue('SEED');
  const variable = block.getFieldValue('VAR');
  const iterations = block.getFieldValue('ITERATIONS');
  const alpha = block.getFieldValue('ALPHA');
  const testType = block.getFieldValue('TEST_TYPE');

  let code = `set.seed(${seed})\n`;
  code += `mean_boot <- do(${iterations}) * mean(~${variable}, data = resample(HELPrct))\n`;

  if (testType === 'two_sided') {
    code += `confint(mean_boot, level = (1 - ${alpha}), method = "quantile")\n`;
  } else {
    code += `confint(mean_boot, level = (1 - 2*${alpha}), method = "quantile")\n`;
  }

  return code;
};

Blockly.JavaScript['Gbootstrap_ci_mean'] = function (block) {
  const seed = block.getFieldValue('SEED');
  const variable = block.getFieldValue('VAR');
  const dataset = block.getFieldValue('DATASET');
  const iterations = block.getFieldValue('ITERATIONS');
  const alpha = block.getFieldValue('ALPHA');
  const testType = block.getFieldValue('TEST_TYPE');

  let code = `set.seed(${seed})\n`;
  code += `mean_boot <- do(${iterations}) * mean(~${variable}, data = resample(${dataset}))\n`;

  if (testType === 'two_sided') {
    code += `confint(mean_boot, level = (1 - ${alpha}), method = "quantile")\n`;
  } else {
    code += `confint(mean_boot, level = (1 - 2*${alpha}), method = "quantile")\n`;
  }

  return code;
};

console.log('Bootstrap CI Mean block registered:', !!Blockly.JavaScript['bootstrap_ci_mean']);

export default {};
