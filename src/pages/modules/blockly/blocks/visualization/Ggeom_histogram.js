import Blockly from 'blockly';

/**
 * Ggeom_histogram block definition with text inputs
 */
Blockly.Blocks['Ggeom_histogram'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('geom_histogram(mapping = aes(x =')
      .appendField(new Blockly.FieldTextInput(''), 'x_axis')
      .appendField('), binwidth =')
      .appendField(new Blockly.FieldTextInput('10'), 'binwidth')
      .appendField(', fill =')
      .appendField(new Blockly.FieldTextInput('steelblue'), 'fill')
      .appendField(', data = HELPrct)');

    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Creates a histogram using ggplot2 with custom inputs');
    this.setHelpUrl('https://ggplot2.tidyverse.org/reference/geom_histogram.html');
  },
};

/**
 * Generator for Ggeom_histogram block
 */
Blockly.JavaScript['Ggeom_histogram'] = function (block) {
  var x_axis = block.getFieldValue('x_axis');
  var binwidth = block.getFieldValue('binwidth');
  var fill = block.getFieldValue('fill');

  // Add quotes to string values if they don't have them
  fill = fill.startsWith('"') ? fill : '"' + fill + '"';

  var code =
    'geom_histogram(mapping = aes(x = ' +
    x_axis +
    '), binwidth = ' +
    binwidth +
    ', fill = ' +
    fill +
    ', data = HELPrct)\n';

  return code;
};

export default {};
