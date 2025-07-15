import Blockly from 'blockly';
import { categorical_vars, categorical_vars_alt } from '../../constants';

Blockly.Blocks['tallysexdata'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('tally(')
      .appendField(new Blockly.FieldDropdown(categorical_vars_alt), 'categorical_variable_1')
      .appendField('~')
      .appendField(new Blockly.FieldDropdown(categorical_vars), 'categorical_variable_2')
      .appendField(', data =')
      .appendField(new Blockly.FieldDropdown([['HELPrct', 'HELPrct']]), 'data')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Select two categorical variables and a dataset to make a two-way table');
    this.setHelpUrl('https://www.rdocumentation.org/packages/dplyr/versions/0.5.0/topics/tally');
  },
};

Blockly.JavaScript['tallysexdata'] = function (block) {
  var dropdown_categorical_var1_name = block.getFieldValue('categorical_variable_1');
  var dropdown_categorical_var2_name = block.getFieldValue('categorical_variable_2');
  var dropdown_data_name = block.getFieldValue('data');
  var code =
    'tally(' +
    dropdown_categorical_var1_name +
    '~' +
    dropdown_categorical_var2_name +
    ', data =' +
    dropdown_data_name +
    ')\n';
  return code;
};
