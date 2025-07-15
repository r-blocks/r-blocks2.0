import Blockly from 'blockly';
import { quantitative_vars, quantitative_vars_alt } from '../../constants';

/**
 * Correlation block definition with dropdown menus
 */
Blockly.Blocks['cor'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('cor(')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'quantitative_variable_1')
      .appendField('~')
      .appendField(new Blockly.FieldDropdown(quantitative_vars_alt), 'quantitative_variable_2')
      .appendField(', data =')
      .appendField(new Blockly.FieldDropdown([['HELPrct', 'HELPrct']]), 'data')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip(
      'Choose two quantitative variables and a dataset to get the correlation between these two variables'
    );
    this.setHelpUrl('https://www.rdocumentation.org/packages/stats/versions/3.6.2/topics/cor');
  },
};

/**
 * Generator for correlation block
 */
Blockly.JavaScript['cor'] = function (block) {
  var dropdown_quantitative_var1_name = block.getFieldValue('quantitative_variable_1');
  var dropdown_quantitative_var2_name = block.getFieldValue('quantitative_variable_2');
  var dropdown_data_name = block.getFieldValue('data');
  var code =
    'cor(' +
    dropdown_quantitative_var1_name +
    '~' +
    dropdown_quantitative_var2_name +
    ', data = ' +
    dropdown_data_name +
    ')\n';
  return code;
};

/**
 * Generic correlation block definition with text inputs
 */
Blockly.Blocks['Gcor'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('cor(')
      .appendField(new Blockly.FieldTextInput(''), 'quantitative_variable_1')
      .appendField('~')
      .appendField(new Blockly.FieldTextInput(''), 'quantitative_variable_2')
      .appendField(', data =')
      .appendField(new Blockly.FieldTextInput(''), 'data')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip(
      'Choose two quantitative variables and a dataset to get the correlation between these two variables'
    );
    this.setHelpUrl('https://www.rdocumentation.org/packages/stats/versions/3.6.2/topics/cor');
  },
};

/**
 * Generator for generic correlation block
 */
Blockly.JavaScript['Gcor'] = function (block) {
  var dropdown_quantitative_var1_name = block.getFieldValue('quantitative_variable_1');
  var dropdown_quantitative_var2_name = block.getFieldValue('quantitative_variable_2');
  var dropdown_data_name = block.getFieldValue('data');
  var code =
    'cor(' +
    dropdown_quantitative_var1_name +
    '~' +
    dropdown_quantitative_var2_name +
    ', data = ' +
    dropdown_data_name +
    ')\n';
  return code;
};

export default {};
