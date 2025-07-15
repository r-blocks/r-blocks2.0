import Blockly from 'blockly';
import { categorical_vars, categorical_vars_alt } from '../../constants';

// Basic tally block for single variable
Blockly.Blocks['tallydata'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('tally(~')
      .appendField(new Blockly.FieldDropdown(categorical_vars), 'categorical_variable')
      .appendField(', data =')
      .appendField(new Blockly.FieldDropdown([['HELPrct', 'HELPrct']]), 'data')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Choose a categorical variable and a dataset to get a contingence table');
    this.setHelpUrl('https://www.rdocumentation.org/packages/dplyr/versions/0.5.0/topics/tally');
  },
};

Blockly.JavaScript['tallydata'] = function (block) {
  var dropdown_categorical_var_name = block.getFieldValue('categorical_variable');
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'tally(~' + dropdown_categorical_var_name + ', data =' + dropdown_data_name + ')\n';
  return code;
};

// Tally with format option
Blockly.Blocks['tallydataformat'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('tally(~')
      .appendField(new Blockly.FieldDropdown(categorical_vars), 'categorical_variable')
      .appendField(', data =')
      .appendField(new Blockly.FieldDropdown([['HELPrct', 'HELPrct']]), 'data')
      .appendField(', format =')
      .appendField(
        new Blockly.FieldDropdown([
          ['"proportion"', '"proportion"'],
          ['"percent"', '"percent"'],
          ['count', 'count'],
        ]),
        'format'
      )
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip(
      'Choose a categorical variable, a dataset and a format to get a contingence table'
    );
    this.setHelpUrl('https://www.rdocumentation.org/packages/dplyr/versions/0.5.0/topics/tally');
  },
};

// ... Continue with other blocks and their generators
// Add rest of tally blocks following same pattern
// Include Generic versions with text inputs

export default {};
