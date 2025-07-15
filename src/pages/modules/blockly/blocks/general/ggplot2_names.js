import Blockly from 'blockly';

/**
 * Names block definition with dropdown menu
 */
Blockly.Blocks['ggplot2_names'] = {
  init: function () {
    this.appendDummyInput('names')
      .appendField('names(')
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
    this.setTooltip('This is used to print the column names of a dataset');
    this.setHelpUrl('https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/names');
  },
};

/**
 * Generator for names block
 */
Blockly.JavaScript['ggplot2_names'] = function (block) {
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'names(' + dropdown_data_name + ')\n';
  return code;
};

export default {};
