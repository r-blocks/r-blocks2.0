import Blockly from 'blockly';

Blockly.Blocks['Gproptest2'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('prop.test(~')
      .appendField(new Blockly.FieldTextInput(''), 'categorical_variable_1')
      .appendField('|')
      .appendField(new Blockly.FieldTextInput(''), 'categorical_variable_2')
      .appendField(', data = ')
      .appendField(new Blockly.FieldTextInput(''), 'data')
      .appendField(', correct = ')
      .appendField(new Blockly.FieldTextInput(''), 'correct')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#039be5');
    this.setTooltip('two-proportion z-test');
    this.setHelpUrl(
      'https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_bar'
    );
  },
};

Blockly.JavaScript['Gproptest2'] = function (block) {
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
