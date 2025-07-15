import Blockly from 'blockly';
import { quantitative_vars, categorical_vars_alt } from '../../constants';

// One-sample t-test blocks
Blockly.Blocks['ttest'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('t.test(~')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'quantitative_variable_1')
      .appendField(', data = ')
      .appendField(new Blockly.FieldDropdown([['HELPrct', 'HELPrct']]), 'data')
      .appendField(', alternative = ')
      .appendField(
        new Blockly.FieldDropdown([
          ['"greater"', '"greater"'],
          ['"two.sided"', '"two.sided"'],
          ['"less"', '"less"'],
        ]),
        'alternative'
      )
      .appendField(', mu = ')
      .appendField(new Blockly.FieldTextInput('30'), 'mu')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#039be5');
    this.setTooltip('one-sample t-test');
    this.setHelpUrl('https://www.rdocumentation.org/packages/stats/versions/3.6.2/topics/t.test');
  },
};

Blockly.JavaScript['ttest'] = function (block) {
  var dropdown_quantitative_var1_name = block.getFieldValue('quantitative_variable_1');
  var dropdown_data_name = block.getFieldValue('data');
  var dropdown_alternative_name = block.getFieldValue('alternative');
  var mu_name = block.getFieldValue('mu');
  var code =
    't.test(~' +
    dropdown_quantitative_var1_name +
    ', data = ' +
    dropdown_data_name +
    ', alternative = ' +
    dropdown_alternative_name +
    ', mu = ' +
    mu_name +
    ')\n';
  return code;
};

// Two-sample t-test blocks
Blockly.Blocks['ttest2'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('t.test(')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'quantitative_variable_1')
      .appendField('~')
      .appendField(new Blockly.FieldDropdown(categorical_vars_alt), 'categorical_variable_1')
      .appendField(', data = ')
      .appendField(new Blockly.FieldDropdown([['HELPrct', 'HELPrct']]), 'data')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#039be5');
    this.setTooltip('two-sample t-test');
    this.setHelpUrl('https://www.rdocumentation.org/packages/stats/versions/3.6.2/topics/t.test');
  },
};

Blockly.JavaScript['ttest2'] = function (block) {
  var dropdown_quantitative_var1_name = block.getFieldValue('quantitative_variable_1');
  var dropdown_categorical_var1_name = block.getFieldValue('categorical_variable_1');
  var dropdown_data_name = block.getFieldValue('data');
  var code =
    't.test(' +
    dropdown_quantitative_var1_name +
    '~' +
    dropdown_categorical_var1_name +
    ', data = ' +
    dropdown_data_name +
    ')\n';
  return code;
};

// Generic versions
Blockly.Blocks['Gttest'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('t.test(~')
      .appendField(new Blockly.FieldTextInput(''), 'quantitative_variable_1')
      .appendField(', data = ')
      .appendField(new Blockly.FieldTextInput(''), 'data')
      .appendField(', alternative = ')
      .appendField(new Blockly.FieldTextInput(''), 'alternative')
      .appendField(', mu = ')
      .appendField(new Blockly.FieldTextInput(''), 'mu')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#039be5');
    this.setTooltip('one-sample t-test');
    this.setHelpUrl('https://www.rdocumentation.org/packages/stats/versions/3.6.2/topics/t.test');
  },
};

Blockly.JavaScript['Gttest'] = function (block) {
  var dropdown_quantitative_var1_name = block.getFieldValue('quantitative_variable_1');
  var dropdown_data_name = block.getFieldValue('data');
  var dropdown_alternative_name = block.getFieldValue('alternative');
  var mu_name = block.getFieldValue('mu');
  var code =
    't.test(~' +
    dropdown_quantitative_var1_name +
    ', data = ' +
    dropdown_data_name +
    ', alternative = ' +
    dropdown_alternative_name +
    ', mu = ' +
    mu_name +
    ')\n';
  return code;
};

Blockly.Blocks['Gttest2'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('t.test(')
      .appendField(new Blockly.FieldTextInput(''), 'quantitative_variable_1')
      .appendField('~')
      .appendField(new Blockly.FieldTextInput(''), 'categorical_variable_1')
      .appendField(', data = ')
      .appendField(new Blockly.FieldTextInput(''), 'data')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#039be5');
    this.setTooltip('two-sample t-test');
    this.setHelpUrl('https://www.rdocumentation.org/packages/stats/versions/3.6.2/topics/t.test');
  },
};

Blockly.JavaScript['Gttest2'] = function (block) {
  var dropdown_quantitative_var1_name = block.getFieldValue('quantitative_variable_1');
  var dropdown_categorical_var1_name = block.getFieldValue('categorical_variable_1');
  var dropdown_data_name = block.getFieldValue('data');
  var code =
    't.test(' +
    dropdown_quantitative_var1_name +
    '~' +
    dropdown_categorical_var1_name +
    ', data = ' +
    dropdown_data_name +
    ')\n';
  return code;
};

export default {};
