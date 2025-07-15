import Blockly from 'blockly';

Blockly.Blocks['Ggf_dens'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('gf_dens(~')
      .appendField(new Blockly.FieldTextInput(''), 'quantitative_variable')
      .appendField(', data =')
      .appendField(new Blockly.FieldTextInput(''), 'data')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('density plot for one quantitative variable');
    this.setHelpUrl(
      'https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_density'
    );
  },
};

Blockly.JavaScript['Ggf_dens'] = function (block) {
  var dropdown_quantitative_var_name = block.getFieldValue('quantitative_variable');
  var dropdown_data_name = block.getFieldValue('data');
  var code =
    'gf_dens(~' + dropdown_quantitative_var_name + ', data = ' + dropdown_data_name + ')\n';
  return code;
};
