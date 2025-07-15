import Blockly from 'blockly';

/**
 * Head function block definition with dropdown
 */
Blockly.Blocks['ggplot2_head'] = {
  init: function () {
    this.appendDummyInput('head')
      .appendField('head(')
      .appendField(
        new Blockly.FieldDropdown([
          ['diamonds', 'diamonds'],
          ['mpg', 'mpg'],
          ['mtcars', 'mtcars'],
          ['economics', 'economics'],
          ['midwest', 'midwest'],
        ]),
        'data'
      )
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('This is used to see the header of a data');
    this.setHelpUrl('https://www.rdocumentation.org/packages/utils/versions/3.6.2/topics/head');
  },
};

/**
 * Generator for head block
 */
Blockly.JavaScript['ggplot2_head'] = function (block) {
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'head(' + dropdown_data_name + ')\n';
  return code;
};

export default {};
