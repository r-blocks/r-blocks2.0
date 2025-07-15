import Blockly from 'blockly';

/**
 * Ggeom_boxplot block definition with text inputs
 */
Blockly.Blocks['Ggeom_boxplot'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('geom_boxplot(mapping = aes(x =')
      .appendField(new Blockly.FieldTextInput(''), 'x_axis')
      .appendField(', y =')
      .appendField(new Blockly.FieldTextInput(''), 'y_axis')
      .appendField('), fill =')
      .appendField(new Blockly.FieldTextInput('steelblue'), 'fill')
      .appendField(', data = HELPrct)');

    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Creates a boxplot using ggplot2 with custom inputs');
    this.setHelpUrl('https://ggplot2.tidyverse.org/reference/geom_boxplot.html');
  },
};

/**
 * Generator for Ggeom_boxplot block
 */
Blockly.JavaScript['Ggeom_boxplot'] = function (block) {
  var x_axis = block.getFieldValue('x_axis');
  var y_axis = block.getFieldValue('y_axis');
  var fill = block.getFieldValue('fill');

  // Add quotes to string values if they don't have them
  fill = fill.startsWith('"') ? fill : '"' + fill + '"';

  var code =
    'geom_boxplot(mapping = aes(x = ' +
    x_axis +
    ', y = ' +
    y_axis +
    '), fill = ' +
    fill +
    ', data = HELPrct)\n';

  return code;
};

export default {};
