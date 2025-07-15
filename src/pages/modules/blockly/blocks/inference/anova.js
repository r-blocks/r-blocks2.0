import Blockly from 'blockly';
import { quantitative_vars, categorical_vars } from '../../constants';

/**
 * ANOVA block definition with dropdown menus
 */
Blockly.Blocks['anova'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('anova(lm(')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'quantitative_variable_1')
      .appendField('~')
      .appendField(new Blockly.FieldDropdown(categorical_vars), 'categorical_variable_1')
      .appendField(', data = ')
      .appendField(new Blockly.FieldDropdown([['HELPrct', 'HELPrct']]), 'data')
      .appendField('))');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#039be5');
    this.setTooltip('one way anova test');
    this.setHelpUrl(
      'https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_bar'
    );
  },
};

/**
 * Generator for ANOVA block
 */
Blockly.JavaScript['anova'] = function (block) {
  var dropdown_quantitative_var1_name = block.getFieldValue('quantitative_variable_1');
  var dropdown_categorical_var1_name = block.getFieldValue('categorical_variable_1');
  var dropdown_data_name = block.getFieldValue('data');
  var code =
    'anova(lm(' +
    dropdown_quantitative_var1_name +
    '~' +
    dropdown_categorical_var1_name +
    ', data = ' +
    dropdown_data_name +
    '))\n';
  return code;
};

/**
 * Generic ANOVA block definition with text inputs
 */
Blockly.Blocks['Ganova'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('anova(lm(')
      .appendField(new Blockly.FieldTextInput(''), 'quantitative_variable_1')
      .appendField('~')
      .appendField(new Blockly.FieldTextInput(''), 'categorical_variable_1')
      .appendField(', data = ')
      .appendField(new Blockly.FieldTextInput(''), 'data')
      .appendField('))');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#039be5');
    this.setTooltip('one way anova test');
    this.setHelpUrl(
      'https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_bar'
    );
  },
};

/**
 * Generator for generic ANOVA block
 */
Blockly.JavaScript['Ganova'] = function (block) {
  var dropdown_quantitative_var1_name = block.getFieldValue('quantitative_variable_1');
  var dropdown_categorical_var1_name = block.getFieldValue('categorical_variable_1');
  var dropdown_data_name = block.getFieldValue('data');
  var code =
    'anova(lm(' +
    dropdown_quantitative_var1_name +
    '~' +
    dropdown_categorical_var1_name +
    ', data = ' +
    dropdown_data_name +
    '))\n';
  return code;
};

export default {};
