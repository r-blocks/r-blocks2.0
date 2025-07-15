import Blockly from 'blockly';

Blockly.Blocks['Gproptest'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('prop.test(~')
      .appendField(new Blockly.FieldTextInput(''), 'categorical_variable_1')
      .appendField(', data = ')
      .appendField(new Blockly.FieldTextInput(''), 'data')
      .appendField(', alternative = ')
      .appendField(new Blockly.FieldTextInput(''), 'alternative')
      .appendField(', success = ')
      .appendField(new Blockly.FieldTextInput(''), 'success')
      .appendField(', p = ')
      .appendField(new Blockly.FieldTextInput(''), 'p')
      .appendField(', conf.level = ')
      .appendField(new Blockly.FieldTextInput(''), 'conf.level')
      .appendField(', correct = ')
      .appendField(new Blockly.FieldTextInput(''), 'correct')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#039be5');
    this.setTooltip('one-proportion z-test');
    this.setHelpUrl(
      'https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_bar'
    );
  },
};

Blockly.JavaScript['Gproptest'] = function (block) {
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
