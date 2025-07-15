import Blockly from 'blockly';

Blockly.Blocks['Gslrsummary'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('summary(lm(')
      .appendField(new Blockly.FieldTextInput(''), 'quantitative_variable_1')
      .appendField('~')
      .appendField(new Blockly.FieldTextInput(''), 'quantitative_variable_2')
      .appendField(', data = ')
      .appendField(new Blockly.FieldTextInput(''), 'data')
      .appendField('))');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#039be5');
    this.setTooltip('simple linear regression');
    this.setHelpUrl(
      'https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_bar'
    );
  },
};

Blockly.JavaScript['Gslrsummary'] = function (block) {
  var dropdown_quantitative_var1_name = block.getFieldValue('quantitative_variable_1');
  var dropdown_quantitative_var2_name = block.getFieldValue('quantitative_variable_2');
  var dropdown_data_name = block.getFieldValue('data');
  var code =
    'summary(lm(' +
    dropdown_quantitative_var1_name +
    '~' +
    dropdown_quantitative_var2_name +
    ', data = ' +
    dropdown_data_name +
    '))\n';
  return code;
};
