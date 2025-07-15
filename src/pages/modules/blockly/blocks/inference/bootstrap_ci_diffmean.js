import Blockly from 'blockly';
import { quantitative_vars, categorical_vars_alt } from '../../constants';

// HELPrct-specific bootstrap CI for difference in two means block
Blockly.Blocks['bootstrap_ci_diffmean'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('set.seed(')
      .appendField(new Blockly.FieldNumber(123, 1, 99999), 'SEED')
      .appendField(')');
    this.appendDummyInput()
      .appendField('mean_boot <- do(')
      .appendField(new Blockly.FieldNumber(5000, 10, 10000), 'ITERATIONS')
      .appendField(') * diffmean(')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'VAR')
      .appendField(' ~ ')
      .appendField(new Blockly.FieldDropdown(categorical_vars_alt), 'GROUP')
      .appendField(', data = resample(HELPrct))');
    this.appendDummyInput()
      .appendField('confint(mean_boot, level = ')
      .appendField(new Blockly.FieldNumber(0.95, 0, 1, 0.01), 'CONF_LEVEL')
      .appendField(', method = "quantile")');

    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('230'); // Match color with other inference blocks
    this.setTooltip('Bootstrap confidence interval for difference in two means using HELPrct data');
    this.setHelpUrl('https://www.rdocumentation.org/packages/mosaic/topics/resample');
  },
};

// Generic bootstrap CI for difference in two means block
Blockly.Blocks['Gbootstrap_ci_diffmean'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('set.seed(')
      .appendField(new Blockly.FieldNumber(123, 1, 99999), 'SEED')
      .appendField(')');
    this.appendDummyInput()
      .appendField('mean_boot <- do(')
      .appendField(new Blockly.FieldNumber(5000, 10, 10000), 'ITERATIONS')
      .appendField(') * diffmean(')
      .appendField(new Blockly.FieldTextInput(''), 'VAR')
      .appendField(' ~ ')
      .appendField(new Blockly.FieldTextInput(''), 'GROUP')
      .appendField(', data = resample(')
      .appendField(new Blockly.FieldTextInput(''), 'DATASET')
      .appendField('))');
    this.appendDummyInput()
      .appendField('confint(mean_boot, level = ')
      .appendField(new Blockly.FieldNumber(0.95, 0, 1, 0.01), 'CONF_LEVEL')
      .appendField(', method = "quantile")');

    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('230'); // Match color with other inference blocks
    this.setTooltip(
      'Bootstrap confidence interval for difference in two means using selected dataset'
    );
    this.setHelpUrl('https://www.rdocumentation.org/packages/mosaic/topics/resample');
  },
};

// Direct generator implementations instead of shared function
Blockly.JavaScript['bootstrap_ci_diffmean'] = function (block) {
  const seed = block.getFieldValue('SEED');
  const variable = block.getFieldValue('VAR');
  const group = block.getFieldValue('GROUP');
  const iterations = block.getFieldValue('ITERATIONS');
  const confLevel = block.getFieldValue('CONF_LEVEL');

  let code = `set.seed(${seed})\n`;
  code += `mean_boot <- do(${iterations}) * diffmean(${variable} ~ ${group}, data = resample(HELPrct))\n`;
  code += `confint(mean_boot, level = ${confLevel}, method = "quantile")\n`;

  return code;
};

Blockly.JavaScript['Gbootstrap_ci_diffmean'] = function (block) {
  const seed = block.getFieldValue('SEED');
  const variable = block.getFieldValue('VAR');
  const group = block.getFieldValue('GROUP');
  const dataset = block.getFieldValue('DATASET');
  const iterations = block.getFieldValue('ITERATIONS');
  const confLevel = block.getFieldValue('CONF_LEVEL');

  let code = `set.seed(${seed})\n`;
  code += `mean_boot <- do(${iterations}) * diffmean(${variable} ~ ${group}, data = resample(${dataset}))\n`;
  code += `confint(mean_boot, level = ${confLevel}, method = "quantile")\n`;

  return code;
};

console.log(
  'Bootstrap CI Diff Mean block registered:',
  !!Blockly.JavaScript['bootstrap_ci_diffmean']
);

export default {};
