import Blockly from 'blockly';

/**
 * Tail block definition with dropdown menu
 */
Blockly.Blocks['ggplot2_tail'] = {
  init: function () {
    this.appendDummyInput('tail')
      .appendField('tail(')
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
    this.setTooltip('This is used to see the tail of the dataset');
    this.setHelpUrl('https://www.rdocumentation.org/packages/utils/versions/3.6.2/topics/tail');
  },
};

/**
 * Generator for tail block
 */
Blockly.JavaScript['ggplot2_tail'] = function (block) {
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'tail(' + dropdown_data_name + ')\n';
  return code;
};

export default {};
