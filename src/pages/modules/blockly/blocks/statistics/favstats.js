import Blockly from 'blockly';
import { quantitative_vars, categorical_vars } from '../../constants';

// Basic favstats block
Blockly.Blocks['favstatsdata'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('favstats(')
      .appendField('~')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'quantitative_variable')
      .appendField(', data =')
      .appendField(new Blockly.FieldDropdown([['HELPrct', 'HELPrct']]), 'data')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Choose a quantitative variable and a dataset to get the numerical summary');
    this.setHelpUrl(
      'https://www.rdocumentation.org/packages/mosaic/versions/0.5-1/topics/favstats'
    );
  },
};

Blockly.JavaScript['favstatsdata'] = function (block) {
  var dropdown_quantitative_var_name = block.getFieldValue('quantitative_variable');
  var dropdown_data_name = block.getFieldValue('data');
  var code =
    'favstats(~' + dropdown_quantitative_var_name + ', data = ' + dropdown_data_name + ')\n';
  return code;
};

// Favstats with substance block
Blockly.Blocks['favstatssubstancedata'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('favstats(')
      .appendField('~')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'quantitative_variable')
      .appendField('|')
      .appendField(new Blockly.FieldDropdown(categorical_vars), 'categorical_variable')
      .appendField(', data =')
      .appendField(new Blockly.FieldDropdown([['HELPrct', 'HELPrct']]), 'data')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip(
      'Choose a quantitative variable, a categorical/grouping variable and a dataset to get the numerical summary for each group'
    );
    this.setHelpUrl(
      'https://www.rdocumentation.org/packages/mosaic/versions/0.5-1/topics/favstats'
    );
  },
};

Blockly.JavaScript['favstatssubstancedata'] = function (block) {
  var dropdown_quantitative_var_name = block.getFieldValue('quantitative_variable');
  var dropdown_categorical_var_name = block.getFieldValue('categorical_variable');
  var dropdown_data_name = block.getFieldValue('data');
  var code =
    'favstats(~' +
    dropdown_quantitative_var_name +
    '|' +
    dropdown_categorical_var_name +
    ', data = ' +
    dropdown_data_name +
    ')\n';
  return code;
};

// Alternative favstats with substance block
Blockly.Blocks['favstatssubstancedata2'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('favstats(')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'quantitative_variable')
      .appendField('~')
      .appendField(new Blockly.FieldDropdown(categorical_vars), 'categorical_variable')
      .appendField(', data =')
      .appendField(new Blockly.FieldDropdown([['HELPrct', 'HELPrct']]), 'data')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip(
      'Choose a quantitative variable, a categorical/grouping variable and a dataset to get the numerical summary for each group'
    );
    this.setHelpUrl(
      'https://www.rdocumentation.org/packages/mosaic/versions/0.5-1/topics/favstats'
    );
  },
};

Blockly.JavaScript['favstatssubstancedata2'] = function (block) {
  var dropdown_quantitative_var_name = block.getFieldValue('quantitative_variable');
  var dropdown_categorical_var_name = block.getFieldValue('categorical_variable');
  var dropdown_data_name = block.getFieldValue('data');
  var code =
    'favstats(' +
    dropdown_quantitative_var_name +
    '~' +
    dropdown_categorical_var_name +
    ', data = ' +
    dropdown_data_name +
    ')\n';
  return code;
};

// Generic versions with text inputs
Blockly.Blocks['Gfavstatsdata'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('favstats(')
      .appendField('~')
      .appendField(new Blockly.FieldTextInput(''), 'quantitative_variable')
      .appendField(', data =')
      .appendField(new Blockly.FieldTextInput(''), 'data')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Choose a quantitative variable and a dataset to get the numerical summary');
    this.setHelpUrl(
      'https://www.rdocumentation.org/packages/mosaic/versions/0.5-1/topics/favstats'
    );
  },
};

Blockly.JavaScript['Gfavstatsdata'] = function (block) {
  var dropdown_quantitative_var_name = block.getFieldValue('quantitative_variable');
  var dropdown_data_name = block.getFieldValue('data');
  var code =
    'favstats(~' + dropdown_quantitative_var_name + ', data = ' + dropdown_data_name + ')\n';
  return code;
};

Blockly.Blocks['Gfavstatssubstancedata'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('favstats(')
      .appendField('~')
      .appendField(new Blockly.FieldTextInput(''), 'quantitative_variable')
      .appendField('|')
      .appendField(new Blockly.FieldTextInput(''), 'categorical_variable')
      .appendField(', data =')
      .appendField(new Blockly.FieldTextInput(''), 'data')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip(
      'Choose a quantitative variable, a categorical/grouping variable and a dataset to get the numerical summary for each group'
    );
    this.setHelpUrl(
      'https://www.rdocumentation.org/packages/mosaic/versions/0.5-1/topics/favstats'
    );
  },
};

Blockly.JavaScript['Gfavstatssubstancedata'] = function (block) {
  var dropdown_quantitative_var_name = block.getFieldValue('quantitative_variable');
  var dropdown_categorical_var_name = block.getFieldValue('categorical_variable');
  var dropdown_data_name = block.getFieldValue('data');
  var code =
    'favstats(~' +
    dropdown_quantitative_var_name +
    '|' +
    dropdown_categorical_var_name +
    ', data = ' +
    dropdown_data_name +
    ')\n';
  return code;
};

Blockly.Blocks['Gfavstatssubstancedata2'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('favstats(')
      .appendField(new Blockly.FieldTextInput(''), 'quantitative_variable')
      .appendField('~')
      .appendField(new Blockly.FieldTextInput(''), 'categorical_variable')
      .appendField(', data =')
      .appendField(new Blockly.FieldTextInput(''), 'data')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip(
      'Choose a quantitative variable, a categorical/grouping variable and a dataset to get the numerical summary for each group'
    );
    this.setHelpUrl(
      'https://www.rdocumentation.org/packages/mosaic/versions/0.5-1/topics/favstats'
    );
  },
};

Blockly.JavaScript['Gfavstatssubstancedata2'] = function (block) {
  var dropdown_quantitative_var_name = block.getFieldValue('quantitative_variable');
  var dropdown_categorical_var_name = block.getFieldValue('categorical_variable');
  var dropdown_data_name = block.getFieldValue('data');
  var code =
    'favstats(' +
    dropdown_quantitative_var_name +
    '~' +
    dropdown_categorical_var_name +
    ', data = ' +
    dropdown_data_name +
    ')\n';
  return code;
};

export default {};
