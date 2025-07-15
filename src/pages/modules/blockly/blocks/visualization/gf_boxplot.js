import Blockly from 'blockly';
import { quantitative_vars, categorical_vars } from '../../constants';

/**
 * Single variable boxplot block
 */
Blockly.Blocks['gf_boxplot'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('gf_boxplot(~')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'quantitative_variable')
      .appendField(', data = ')
      .appendField(new Blockly.FieldDropdown([['HELPrct', 'HELPrct']]), 'data')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('box plot for one quantitative variable');
    this.setHelpUrl(
      'https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_boxplot'
    );
  },
};

Blockly.JavaScript['gf_boxplot'] = function (block) {
  var dropdown_quantitative_var_name = block.getFieldValue('quantitative_variable');
  var dropdown_data_name = block.getFieldValue('data');
  var code =
    'gf_boxplot(~' + dropdown_quantitative_var_name + ', data = ' + dropdown_data_name + ')\n';
  return code;
};

/**
 * Grouped boxplot block
 */
Blockly.Blocks['gf_boxplot_substance'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('gf_boxplot(')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'quantitative_variable')
      .appendField('~')
      .appendField(new Blockly.FieldDropdown(categorical_vars), 'categorical_variable')
      .appendField(', data =')
      .appendField(new Blockly.FieldDropdown([['HELPrct', 'HELPrct']]), 'data')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('box plot by groups');
    this.setHelpUrl(
      'https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_boxplot'
    );
  },
};

Blockly.JavaScript['gf_boxplot_substance'] = function (block) {
  var dropdown_quantitative_var_name = block.getFieldValue('quantitative_variable');
  var dropdown_categorical_var_name = block.getFieldValue('categorical_variable');
  var dropdown_data_name = block.getFieldValue('data');
  var code =
    'gf_boxplot(' +
    dropdown_quantitative_var_name +
    '~' +
    dropdown_categorical_var_name +
    ', data = ' +
    dropdown_data_name +
    ')\n';
  return code;
};

/**
 * Generic boxplot blocks
 */
Blockly.Blocks['Ggf_boxplot'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('gf_boxplot(~')
      .appendField(new Blockly.FieldTextInput(''), 'quantitative_variable')
      .appendField(', data = ')
      .appendField(new Blockly.FieldTextInput(''), 'data')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('box plot for one quantitative variable');
    this.setHelpUrl(
      'https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_boxplot'
    );
  },
};

Blockly.Blocks['Ggf_boxplot_substance'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('gf_boxplot(')
      .appendField(new Blockly.FieldTextInput(''), 'quantitative_variable')
      .appendField('~')
      .appendField(new Blockly.FieldTextInput(''), 'categorical_variable')
      .appendField(', data =')
      .appendField(new Blockly.FieldTextInput(''), 'data')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('box plot by groups');
    this.setHelpUrl(
      'https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_boxplot'
    );
  },
};

Blockly.JavaScript['Ggf_boxplot'] = Blockly.JavaScript['gf_boxplot'];

Blockly.JavaScript['Ggf_boxplot_substance'] = Blockly.JavaScript['gf_boxplot_substance'];

export default {};
