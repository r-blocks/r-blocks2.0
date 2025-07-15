import Blockly from 'blockly';

Blockly.Blocks['Ggf_point'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('gf_point(')
      .appendField(new Blockly.FieldTextInput(''), 'quantitative_variable_1')
      .appendField('~')
      .appendField(new Blockly.FieldTextInput(''), 'quantitative_variable_2')
      .appendField(', color = ~')
      .appendField(new Blockly.FieldTextInput(''), 'categorical_variable')
      .appendField(', data =')
      .appendField(new Blockly.FieldTextInput(''), 'data')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('overlaid density plots');
    this.setHelpUrl(
      'https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_point'
    );
  },
};

Blockly.JavaScript['Ggf_point'] = function (block) {
  var dropdown_quantitative_var1_name = block.getFieldValue('quantitative_variable_1');
  var dropdown_quantitative_var2_name = block.getFieldValue('quantitative_variable_2');
  var color = block.getFieldValue('categorical_variable');
  var dropdown_data_name = block.getFieldValue('data');
  var code =
    'gf_point(' +
    dropdown_quantitative_var1_name +
    '~' +
    dropdown_quantitative_var2_name +
    ', color = ~' +
    color +
    ', data = ' +
    dropdown_data_name +
    ')\n';
  return code;
};
