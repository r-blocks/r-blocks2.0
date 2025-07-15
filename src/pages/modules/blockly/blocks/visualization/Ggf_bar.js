import Blockly from 'blockly';

Blockly.Blocks['Ggf_bar'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('gf_bar(~')
      .appendField(new Blockly.FieldTextInput(''), 'categorical_variable_1')
      .appendField(', data =')
      .appendField(new Blockly.FieldTextInput(''), 'data')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('bar chart for one categorical variable');
    this.setHelpUrl(
      'https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_bar'
    );
  },
};

Blockly.JavaScript['Ggf_bar'] = function (block) {
  var dropdown_categorical_var1_name = block.getFieldValue('categorical_variable_1');
  var dropdown_data_name = block.getFieldValue('data');
  //var dropdown_categorical_var2_name = block.getFieldValue('categorical_variable_2');
  var code = 'gf_bar(~' + dropdown_categorical_var1_name + ', data = ' + dropdown_data_name + ')\n';
  return code;
};
