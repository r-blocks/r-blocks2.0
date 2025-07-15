import Blockly from 'blockly';

/**
 * Ggeom_bar block definition with text inputs
 */
Blockly.Blocks['Ggeom_bar'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('geom_bar(mapping = aes(x =')
      .appendField(new Blockly.FieldTextInput(''), 'x_axis')
      .appendField('), stat = "count", fill =')
      .appendField(new Blockly.FieldTextInput('steelblue'), 'fill')
      .appendField(', data = HELPrct)');

    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Creates a bar chart (counts occurrences) using ggplot2 with custom inputs');
    this.setHelpUrl('https://ggplot2.tidyverse.org/reference/geom_bar.html');
  },
};

/**
 * Generator for Ggeom_bar block
 */
Blockly.JavaScript['Ggeom_bar'] = function (block) {
  var x_axis = block.getFieldValue('x_axis');
  var fill = block.getFieldValue('fill');

  // Add quotes to string values if they don't have them
  fill = fill.startsWith('"') ? fill : '"' + fill + '"';

  var code =
    'geom_bar(mapping = aes(x = ' +
    x_axis +
    '), stat = "count", fill = ' +
    fill +
    ', data = HELPrct)\n';

  return code;
};

export default {};
