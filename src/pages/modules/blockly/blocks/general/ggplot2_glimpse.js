import Blockly from 'blockly';

/**
 * Block definition for glimpse function with dropdown menu
 */
Blockly.Blocks['ggplot2_glimpse'] = {
  init: function () {
    this.appendDummyInput('glimpse')
      .appendField('glimpse(')
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
    this.setTooltip('This is used to take a glimpse of a dataset (from dplyr)');
    this.setHelpUrl('https://www.rdocumentation.org/packages/dplyr/versions/0.7.8/topics/glimpse');
  },
};

/**
 * Generator for glimpse block
 */
Blockly.JavaScript['ggplot2_glimpse'] = function (block) {
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'glimpse(' + dropdown_data_name + ')\n';
  return code;
};

export default {};
