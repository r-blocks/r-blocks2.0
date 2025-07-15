import Blockly from 'blockly';
import { quantitative_vars } from '../../constants';

// HELPrct-specific bootstrap test for paired mean difference block
Blockly.Blocks['bootstrap_test_paired'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('set.seed(')
      .appendField(new Blockly.FieldNumber(123, 1, 99999), 'SEED')
      .appendField(')');
    this.appendDummyInput()
      .appendField('HELPrct <- mutate(HELPrct, pair.diff = ')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'POST_VAR')
      .appendField(' - ')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'PRE_VAR')
      .appendField(')');
    this.appendDummyInput().appendField('bar_d <- mean(~ pair.diff, data = HELPrct)');
    this.appendDummyInput().appendField('HELPrct <- mutate(HELPrct, new_diff = pair.diff - bar_d)');
    this.appendDummyInput()
      .appendField('sim_null <- do(')
      .appendField(new Blockly.FieldNumber(5000, 10, 10000), 'ITERATIONS')
      .appendField(') *');
    this.appendDummyInput().appendField('    mean(~ new_diff, data = resample(HELPrct))');
    this.appendDummyInput()
      .appendField('prop(~ (')
      .appendField(
        new Blockly.FieldDropdown([
          ['mean <= bar_d', 'less'],
          ['mean >= bar_d', 'greater'],
          ['abs(mean) >= abs(bar_d)', 'two.sided'],
        ]),
        'ALTERNATIVE'
      )
      .appendField('), data = sim_null)');

    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('230'); // Match color with other inference blocks
    this.setTooltip('Bootstrap test for paired mean difference using HELPrct data');
    this.setHelpUrl('https://www.rdocumentation.org/packages/mosaic/topics/resample');
  },
};

// Generic bootstrap test for paired mean difference block
Blockly.Blocks['Gbootstrap_test_paired'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('set.seed(')
      .appendField(new Blockly.FieldNumber(123, 1, 99999), 'SEED')
      .appendField(')');
    this.appendDummyInput()
      .appendField('')
      .appendField(new Blockly.FieldTextInput(''), 'DATASET')
      .appendField(' <- mutate(')
      .appendField(new Blockly.FieldTextInput(''), 'ORIG_DATASET')
      .appendField(', pair.diff = ')
      .appendField(new Blockly.FieldTextInput(''), 'POST_VAR')
      .appendField(' - ')
      .appendField(new Blockly.FieldTextInput(''), 'PRE_VAR')
      .appendField(')');
    this.appendDummyInput()
      .appendField('bar_d <- mean(~ pair.diff, data = ')
      .appendField(new Blockly.FieldTextInput(''), 'MEAN_DATASET')
      .appendField(')');
    this.appendDummyInput()
      .appendField('')
      .appendField(new Blockly.FieldTextInput(''), 'DATASET2')
      .appendField(' <- mutate(')
      .appendField(new Blockly.FieldTextInput(''), 'DATASET3')
      .appendField(', new_diff = pair.diff - bar_d)');
    this.appendDummyInput()
      .appendField('sim_null <- do(')
      .appendField(new Blockly.FieldNumber(5000, 10, 10000), 'ITERATIONS')
      .appendField(') * mean(~ new_diff, data = resample(')
      .appendField(new Blockly.FieldTextInput(''), 'RESAMPLE_DATASET')
      .appendField('))');
    this.appendDummyInput()
      .appendField('prop(~ (')
      .appendField(new Blockly.FieldTextInput(''), 'ALTERNATIVE')
      .appendField('), data = sim_null)');

    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('230'); // Match color with other inference blocks
    this.setTooltip('Bootstrap test for paired mean difference using selected dataset');
    this.setHelpUrl('https://www.rdocumentation.org/packages/mosaic/topics/resample');
  },
};

// Separate generator functions for each block
Blockly.JavaScript['bootstrap_test_paired'] = function (block) {
  const seed = block.getFieldValue('SEED');
  const preVar = block.getFieldValue('PRE_VAR');
  const postVar = block.getFieldValue('POST_VAR');
  const iterations = block.getFieldValue('ITERATIONS');
  const alternative = block.getFieldValue('ALTERNATIVE');

  let code = `set.seed(${seed})\n`;
  code += `HELPrct <- mutate(HELPrct, pair.diff = ${postVar} - ${preVar})\n`;
  code += `bar_d <- mean(~ pair.diff, data = HELPrct)\n`;
  code += `HELPrct <- mutate(HELPrct, new_diff = pair.diff - bar_d)\n`;
  code += `sim_null <- do(${iterations}) * mean(~ new_diff, data = resample(HELPrct))\n`;

  switch (alternative) {
    case 'less':
      code += `prop(~ (mean <= bar_d), data = sim_null)\n`;
      break;
    case 'greater':
      code += `prop(~ (mean >= bar_d), data = sim_null)\n`;
      break;
    case 'two.sided':
      code += `prop(~ (abs(mean) >= abs(bar_d)), data = sim_null)\n`;
      break;
  }

  return code;
};

Blockly.JavaScript['Gbootstrap_test_paired'] = function (block) {
  const seed = block.getFieldValue('SEED');
  const dataset = block.getFieldValue('DATASET');
  const origDataset = block.getFieldValue('ORIG_DATASET');
  const preVar = block.getFieldValue('PRE_VAR');
  const postVar = block.getFieldValue('POST_VAR');
  const meanDataset = block.getFieldValue('MEAN_DATASET');
  const dataset2 = block.getFieldValue('DATASET2');
  const dataset3 = block.getFieldValue('DATASET3');
  const resampleDataset = block.getFieldValue('RESAMPLE_DATASET');
  const iterations = block.getFieldValue('ITERATIONS');
  const alternative = block.getFieldValue('ALTERNATIVE');

  let code = `set.seed(${seed})\n`;
  code += `${dataset} <- mutate(${origDataset}, pair.diff = ${postVar} - ${preVar})\n`;
  code += `bar_d <- mean(~ pair.diff, data = ${meanDataset})\n`;
  code += `${dataset2} <- mutate(${dataset3}, new_diff = pair.diff - bar_d)\n`;
  code += `sim_null <- do(${iterations}) * mean(~ new_diff, data = resample(${resampleDataset}))\n`;

  switch (alternative) {
    case 'less':
      code += `prop(~ (mean <= bar_d), data = sim_null)\n`;
      break;
    case 'greater':
      code += `prop(~ (mean >= bar_d), data = sim_null)\n`;
      break;
    case 'two.sided':
      code += `prop(~ (abs(mean) >= abs(bar_d)), data = sim_null)\n`;
      break;
  }

  return code;
};

console.log(
  'Bootstrap Test Paired block registered:',
  !!Blockly.JavaScript['bootstrap_test_paired']
);

export default {};
