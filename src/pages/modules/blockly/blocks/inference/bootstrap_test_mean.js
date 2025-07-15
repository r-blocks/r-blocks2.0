import Blockly from 'blockly';
import { quantitative_vars } from '../../constants';

// HELPrct-specific bootstrap test for mean block
Blockly.Blocks['bootstrap_test_mean'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('set.seed(')
      .appendField(new Blockly.FieldNumber(123, 1, 99999), 'SEED')
      .appendField(')');
    this.appendDummyInput()
      .appendField('observed_mean <- mean(~')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'VAR')
      .appendField(', data=HELPrct)');
    this.appendDummyInput()
      .appendField('HELPrct_shifted <- mutate(HELPrct, new_')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'VAR2')
      .appendField(' = ')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'VAR3')
      .appendField(' - observed_mean)');
    this.appendDummyInput()
      .appendField('sim_null <- do(')
      .appendField(new Blockly.FieldNumber(5000, 10, 10000), 'ITERATIONS')
      .appendField(') * mean(~ new_')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'VAR4')
      .appendField(', data = resample(HELPrct_shifted))');
    this.appendDummyInput()
      .appendField('prop(~ (')
      .appendField(
        new Blockly.FieldDropdown([
          ['mean <= observed_mean', 'less'],
          ['mean >= observed_mean', 'greater'],
          ['abs(mean) >= abs(observed_mean)', 'two.sided'],
        ]),
        'ALTERNATIVE'
      )
      .appendField('), data = sim_null)');

    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('230'); // Match color with other inference blocks
    this.setTooltip('Bootstrap test for one mean using HELPrct data');
    this.setHelpUrl('https://www.rdocumentation.org/packages/mosaic/topics/resample');

    // Automatically update related fields when variable changes
    this.setOnChange(function (changeEvent) {
      if (
        changeEvent.name === 'VAR' ||
        (changeEvent.element === 'field' && changeEvent.name === 'VAR')
      ) {
        const varValue = this.getFieldValue('VAR');
        this.setFieldValue(varValue, 'VAR2');
        this.setFieldValue(varValue, 'VAR3');
        this.setFieldValue(varValue, 'VAR4');
      }
    });
  },
};

// Generic bootstrap test for mean block
Blockly.Blocks['Gbootstrap_test_mean'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('set.seed(')
      .appendField(new Blockly.FieldNumber(123, 1, 99999), 'SEED')
      .appendField(')');
    this.appendDummyInput()
      .appendField('observed_mean <- mean(~')
      .appendField(new Blockly.FieldTextInput(''), 'VAR')
      .appendField(', data=')
      .appendField(new Blockly.FieldTextInput(''), 'DATASET')
      .appendField(')');
    this.appendDummyInput()
      .appendField('')
      .appendField(new Blockly.FieldTextInput(''), 'SHIFTED_DATASET')
      .appendField('_shifted <- mutate(')
      .appendField(new Blockly.FieldTextInput(''), 'ORIG_DATASET')
      .appendField(', new_')
      .appendField(new Blockly.FieldTextInput(''), 'VAR2')
      .appendField(' = ')
      .appendField(new Blockly.FieldTextInput(''), 'VAR3')
      .appendField(' - observed_mean)');
    this.appendDummyInput()
      .appendField('sim_null <- do(')
      .appendField(new Blockly.FieldNumber(5000, 10, 10000), 'ITERATIONS')
      .appendField(') * mean(~ new_')
      .appendField(new Blockly.FieldTextInput(''), 'VAR4')
      .appendField(', data = resample(')
      .appendField(new Blockly.FieldTextInput(''), 'RESAMPLE_DATASET')
      .appendField('_shifted))');
    this.appendDummyInput()
      .appendField('prop(~ (')
      .appendField(new Blockly.FieldTextInput(''), 'ALTERNATIVE')
      .appendField('), data = sim_null)');

    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('230'); // Match color with other inference blocks
    this.setTooltip('Bootstrap test for one mean using selected dataset');
    this.setHelpUrl('https://www.rdocumentation.org/packages/mosaic/topics/resample');
  },
};

// Separate generator functions for each block
Blockly.JavaScript['bootstrap_test_mean'] = function (block) {
  const seed = block.getFieldValue('SEED');
  const variable = block.getFieldValue('VAR');
  const var2 = block.getFieldValue('VAR2');
  const var3 = block.getFieldValue('VAR3');
  const var4 = block.getFieldValue('VAR4');
  const alternative = block.getFieldValue('ALTERNATIVE');
  const iterations = block.getFieldValue('ITERATIONS');

  let code = ``;
  code += `set.seed(${seed})\n`;
  code += `observed_mean <- mean(~${variable}, data=HELPrct)\n`;
  code += `HELPrct_shifted <- mutate(HELPrct, new_${var2} = ${var3} - observed_mean)\n`;
  code += `sim_null <- do(${iterations}) * mean(~ new_${var4}, data = resample(HELPrct_shifted))\n`;

  switch (alternative) {
    case 'less':
      code += `prop(~ (mean <= observed_mean), data = sim_null)\n`;
      break;
    case 'greater':
      code += `prop(~ (mean >= observed_mean), data = sim_null)\n`;
      break;
    case 'two.sided':
      code += `prop(~ (abs(mean) >= abs(observed_mean)), data = sim_null)\n`;
      break;
  }

  return code;
};

Blockly.JavaScript['Gbootstrap_test_mean'] = function (block) {
  const seed = block.getFieldValue('SEED');
  const variable = block.getFieldValue('VAR');
  const dataset = block.getFieldValue('DATASET');
  const shiftedDataset = block.getFieldValue('SHIFTED_DATASET');
  const origDataset = block.getFieldValue('ORIG_DATASET');
  const var2 = block.getFieldValue('VAR2');
  const var3 = block.getFieldValue('VAR3');
  const var4 = block.getFieldValue('VAR4');
  const resampleDataset = block.getFieldValue('RESAMPLE_DATASET');
  const alternative = block.getFieldValue('ALTERNATIVE');
  const iterations = block.getFieldValue('ITERATIONS');

  let code = ``;
  code += `set.seed(${seed})\n`;
  code += `observed_mean <- mean(~${variable}, data=${dataset})\n`;
  code += `${shiftedDataset}_shifted <- mutate(${origDataset}, new_${var2} = ${var3} - observed_mean)\n`;
  code += `sim_null <- do(${iterations}) * mean(~ new_${var4}, data = resample(${resampleDataset}_shifted))\n`;

  switch (alternative) {
    case 'less':
      code += `prop(~ (mean <= observed_mean), data = sim_null)\n`;
      break;
    case 'greater':
      code += `prop(~ (mean >= observed_mean), data = sim_null)\n`;
      break;
    case 'two.sided':
      code += `prop(~ (abs(mean) >= abs(observed_mean)), data = sim_null)\n`;
      break;
  }

  return code;
};

console.log('Bootstrap Test Mean block registered:', !!Blockly.JavaScript['bootstrap_test_mean']);

export default {};
