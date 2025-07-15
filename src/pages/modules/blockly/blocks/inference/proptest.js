import Blockly from 'blockly';
import {
  categorical_vars,
  categorical_vars_alt,
  categorical_vars_alt_homelessfirst,
} from '../../constants';

/**
 * One-proportion z-test block definition
 */
Blockly.Blocks['proptest'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('prop.test(~')
      .appendField(new Blockly.FieldDropdown(categorical_vars), 'categorical_variable_1')
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
      .appendField(', success = ')
      .appendField(new Blockly.FieldTextInput('"yes"'), 'success')
      .appendField(', p = ')
      .appendField(new Blockly.FieldTextInput('0.7'), 'p')
      .appendField(', conf.level = ')
      .appendField(
        new Blockly.FieldDropdown([
          ['0.95', '0.95'],
          ['0.90', '0.90'],
          ['0.99', '0.99'],
          ['0.98', '0.98'],
        ]),
        'conf.level'
      )
      .appendField(', correct = ')
      .appendField(
        new Blockly.FieldDropdown([
          ['FALSE', 'FALSE'],
          ['TRUE', 'TRUE'],
        ]),
        'correct'
      )
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#039be5');
    this.setTooltip('one-proportion z-test');
    this.setHelpUrl(
      'https://www.rdocumentation.org/packages/stats/versions/3.6.2/topics/prop.test'
    );
  },
};

/**
 * Two-proportion z-test block definition
 */
Blockly.Blocks['proptest2'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('prop.test(~')
      .appendField(
        new Blockly.FieldDropdown(categorical_vars_alt_homelessfirst),
        'categorical_variable_1'
      )
      .appendField('|')
      .appendField(new Blockly.FieldDropdown(categorical_vars_alt), 'categorical_variable_2')
      .appendField(', data = ')
      .appendField(new Blockly.FieldDropdown([['HELPrct', 'HELPrct']]), 'data')
      .appendField(', correct = ')
      .appendField(
        new Blockly.FieldDropdown([
          ['FALSE', 'FALSE'],
          ['TRUE', 'TRUE'],
        ]),
        'correct'
      )
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#039be5');
    this.setTooltip('two-proportion z-test');
    this.setHelpUrl(
      'https://www.rdocumentation.org/packages/stats/versions/3.6.2/topics/prop.test'
    );
  },
};

// Generators
Blockly.JavaScript['proptest'] = function (block) {
  var dropdown_categorical_var1_name = block.getFieldValue('categorical_variable_1');
  var dropdown_data_name = block.getFieldValue('data');
  var dropdown_alternative_name = block.getFieldValue('alternative');
  var success_name = block.getFieldValue('success');
  var p_name = block.getFieldValue('p');
  var dropdown_conflevel = block.getFieldValue('conf.level');
  var dropdown_correct_name = block.getFieldValue('correct');
  var code =
    'prop.test(~' +
    dropdown_categorical_var1_name +
    ', data = ' +
    dropdown_data_name +
    ', alternative = ' +
    dropdown_alternative_name +
    ', success = ' +
    success_name +
    ', p = ' +
    p_name +
    ', conf.level = ' +
    dropdown_conflevel +
    ', correct = ' +
    dropdown_correct_name +
    ')\n';
  return code;
};

Blockly.JavaScript['proptest2'] = function (block) {
  var dropdown_categorical_var1_name = block.getFieldValue('categorical_variable_1');
  var dropdown_categorical_var2_name = block.getFieldValue('categorical_variable_2');
  var dropdown_data_name = block.getFieldValue('data');
  var dropdown_correct_name = block.getFieldValue('correct');
  var code =
    'prop.test(~' +
    dropdown_categorical_var1_name +
    '|' +
    dropdown_categorical_var2_name +
    ', data = ' +
    dropdown_data_name +
    ', correct = ' +
    dropdown_correct_name +
    ')\n';
  return code;
};

export default {};
