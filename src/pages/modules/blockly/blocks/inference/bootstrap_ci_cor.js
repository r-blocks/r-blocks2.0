import Blockly from 'blockly';
import { quantitative_vars, quantitative_vars_alt } from '../../constants';

// HELPrct-specific bootstrap CI for correlation block
Blockly.Blocks['bootstrap_ci_cor'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('set.seed(')
      .appendField(new Blockly.FieldNumber(123, 1, 99999), 'SEED')
      .appendField(')');
    this.appendDummyInput()
      .appendField('cor_boot <- do(')
      .appendField(new Blockly.FieldNumber(500, 10, 10000), 'ITERATIONS')
      .appendField(') * cor(')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'VAR1')
      .appendField(' ~ ')
      .appendField(new Blockly.FieldDropdown(quantitative_vars_alt), 'VAR2')
      .appendField(', data = resample(HELPrct))');
    this.appendDummyInput()
      .appendField('confint(cor_boot, level = ')
      .appendField(new Blockly.FieldNumber(0.95, 0, 1, 0.01), 'CONF_LEVEL')
      .appendField(', method = "quantile")');

    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('230'); // Match color with other inference blocks
    this.setTooltip('Bootstrap confidence interval for correlation using HELPrct data');
    this.setHelpUrl('https://www.rdocumentation.org/packages/mosaic/topics/resample');
  },
};

// Generic bootstrap CI for correlation block
Blockly.Blocks['Gbootstrap_ci_cor'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('set.seed(')
      .appendField(new Blockly.FieldNumber(123, 1, 99999), 'SEED')
      .appendField(')');
    this.appendDummyInput()
      .appendField('cor_boot <- do(')
      .appendField(new Blockly.FieldNumber(5000, 10, 10000), 'ITERATIONS')
      .appendField(') * cor(')
      .appendField(new Blockly.FieldTextInput(''), 'VAR1')
      .appendField(' ~ ')
      .appendField(new Blockly.FieldTextInput(''), 'VAR2')
      .appendField(', data = resample(')
      .appendField(new Blockly.FieldTextInput(''), 'DATASET')
      .appendField('))');
    this.appendDummyInput()
      .appendField('confint(cor_boot, level = ')
      .appendField(new Blockly.FieldNumber(0.95, 0, 1, 0.01), 'CONF_LEVEL')
      .appendField(', method = "quantile")');

    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('230'); // Match color
    this.setTooltip('Bootstrap confidence interval for correlation using selected dataset');
    this.setHelpUrl('https://www.rdocumentation.org/packages/mosaic/topics/resample');
  },
};

// Generator implementations
Blockly.JavaScript['bootstrap_ci_cor'] = function (block) {
  const seed = block.getFieldValue('SEED');
  const var1 = block.getFieldValue('VAR1');
  const var2 = block.getFieldValue('VAR2');
  const iterations = block.getFieldValue('ITERATIONS');
  const confLevel = block.getFieldValue('CONF_LEVEL');

  let code = `set.seed(${seed})\n`;
  code += `cor_boot <- do(${iterations}) * cor(${var1} ~ ${var2}, data = resample(HELPrct))\n`;
  code += `confint(cor_boot, level = ${confLevel}, method = "quantile")\n`;

  return code;
};

Blockly.JavaScript['Gbootstrap_ci_cor'] = function (block) {
  const seed = block.getFieldValue('SEED');
  const var1 = block.getFieldValue('VAR1');
  const var2 = block.getFieldValue('VAR2');
  const dataset = block.getFieldValue('DATASET');
  const iterations = block.getFieldValue('ITERATIONS');
  const confLevel = block.getFieldValue('CONF_LEVEL');

  let code = `set.seed(${seed})\n`;
  code += `cor_boot <- do(${iterations}) * cor(${var1} ~ ${var2}, data = resample(${dataset}))\n`;
  code += `confint(cor_boot, level = ${confLevel}, method = "quantile")\n`;

  return code;
};

console.log('Bootstrap CI Correlation block registered:', !!Blockly.JavaScript['bootstrap_ci_cor']);

export default {};
