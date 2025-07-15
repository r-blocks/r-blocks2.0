/**
 * Workspace Component for RBlocks
 *
 * Main workspace implementation that allows users to create R statistical analysis
 * code using a block-based programming interface. Contains the Blockly workspace
 * configuration and block definitions for statistical operations.
 *
 * Dependencies:
 * - React
 * - Blockly
 * - react-blockly
 * - @mui/icons-material
 *
 * Related:
 * - See Toolbar component for navigation controls
 * - See ./blockly/blocks for block definitions
 */

import React, { useState, useEffect } from 'react';

//Blockly
import Blockly from 'blockly';
import { BlocklyWorkspace } from 'react-blockly';
import './blockly/blocks';

// Contexts

// Style
import './styles/base.css';

/**
 * Renders a Blockly visual programming workspace for creating R statistical analysis code.
 * Includes blocks for general functionality, numerical summaries, data visualization
 * and statistical inference.
 *
 * @returns {JSX.Element} A Blockly workspace component
 */
export default function Workspace({ initialWorkspaceXml, onWorkspaceInstance }) {
  const [workspace, setWorkspace] = useState(null);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const workspaceConfig = {
    grid: {
      spacing: 20,
      length: 3,
      colour: '#ccc',
      snap: true,
    },
    // Add move optimization options
    moveOptions: {
      drag: true,
      scrollbars: true,
      wheel: true,
    },
    // Reduce event firing frequency
    maxInstances: 1,
    maxBlocks: 1000,
    trashcan: true,
  };

  // Add this effect to handle external XML updates
  // Handle initial XML loading
  useEffect(() => {
    if (workspace && initialWorkspaceXml) {
      try {
        // Clear existing workspace
        workspace.clear();

        // Load new XML
        const xml = Blockly.Xml.textToDom(initialWorkspaceXml);
        Blockly.Xml.domToWorkspace(xml, workspace);
      } catch (e) {
        console.error('Error loading workspace XML:', e);
      }
    }
  }, [workspace, initialWorkspaceXml]);

  // Only handle workspace instance changes
  const handleWorkspaceChange = (workspaceInstance) => {
    if (!workspace) {
      setWorkspace(workspaceInstance);
      if (onWorkspaceInstance) {
        onWorkspaceInstance(workspaceInstance);
      }
    }
  };

  /**
   * Updated RBlocks Workspace Component with Consistent Directory Structure
   *
   * The dropdown structure for both mosaic and ggplot2 blocks has been updated
   * to have the same categories and options for consistency.
   */

  const toolboxCategories = {
    kind: 'categoryToolbox',
    contents: [
      {
        kind: 'category',
        name: 'General Functions',
        colour: '#FF6B5B',
        contents: [
          { kind: 'block', type: 'Glib' },
          { kind: 'block', type: 'lib' },
          { kind: 'block', type: 'Gnames' },
          { kind: 'block', type: 'names' },
          { kind: 'block', type: 'Gglimpse' },
          { kind: 'block', type: 'glimpse' },
          { kind: 'block', type: 'Ghead' },
          { kind: 'block', type: 'head' },
          { kind: 'block', type: 'Gtail' },
          { kind: 'block', type: 'tail' },
          { kind: 'block', type: 'Ghelp' },
          { kind: 'block', type: 'help' },
        ],
      },
      {
        kind: 'category',
        name: 'mosaic',
        colour: '#4A90E2',
        contents: [
          {
            kind: 'category',
            name: 'General Functionality',
            colour: '#FF6B5B',
            contents: [
              { kind: 'block', type: 'lib' },
              { kind: 'block', type: 'names' },
              { kind: 'block', type: 'glimpse' },
              { kind: 'block', type: 'head' },
              { kind: 'block', type: 'tail' },
              { kind: 'block', type: 'help' },
            ],
          },
          {
            kind: 'category',
            name: 'Numerical Summaries (using HELPrct)',
            colour: '#66BB6A',
            contents: [
              { kind: 'block', type: 'tallydata' },
              { kind: 'block', type: 'tallydataformat' },
              { kind: 'block', type: 'tallysexdata' },
              { kind: 'block', type: 'tallysexdata2' },
              { kind: 'block', type: 'tallysexformatdata' },
              { kind: 'block', type: 'favstatsdata' },
              { kind: 'block', type: 'favstatssubstancedata' },
              { kind: 'block', type: 'favstatssubstancedata2' },
              { kind: 'block', type: 'cor' },
            ],
          },
          {
            kind: 'category',
            name: 'Numerical Summaries',
            colour: '#66BB6A',
            contents: [
              { kind: 'block', type: 'Gtallydata' },
              { kind: 'block', type: 'Gtallydataformat' },
              { kind: 'block', type: 'Gtallysexdata' },
              { kind: 'block', type: 'Gtallysexdata2' },
              { kind: 'block', type: 'Gtallysexformatdata' },
              { kind: 'block', type: 'Gfavstatsdata' },
              { kind: 'block', type: 'Gfavstatssubstancedata' },
              { kind: 'block', type: 'Gfavstatssubstancedata2' },
              { kind: 'block', type: 'Gcor' },
            ],
          },
          {
            kind: 'category',
            name: 'Data Visualization (using HELPrct)',
            colour: '#43A047',
            contents: [
              { kind: 'block', type: 'gf_bar' },
              { kind: 'block', type: 'pie' },
              { kind: 'block', type: 'gf_counts' },
              { kind: 'block', type: 'gf_percents' },
              { kind: 'block', type: 'mosaicplot' },
              { kind: 'block', type: 'gf_boxplot' },
              { kind: 'block', type: 'gf_boxplot_substance' },
              { kind: 'block', type: 'gf_histogram' },
              { kind: 'block', type: 'gf_histogram_substance' },
              { kind: 'block', type: 'gf_dens' },
              { kind: 'block', type: 'gf_dens_color' },
              { kind: 'block', type: 'gf_point' },
            ],
          },
          {
            kind: 'category',
            name: 'Data Visualization',
            colour: '#43A047',
            contents: [
              { kind: 'block', type: 'Ggf_bar' },
              { kind: 'block', type: 'Gpie' },
              { kind: 'block', type: 'Ggf_counts' },
              { kind: 'block', type: 'Ggf_percents' },
              { kind: 'block', type: 'Gmosaicplot' },
              { kind: 'block', type: 'Ggf_boxplot' },
              { kind: 'block', type: 'Ggf_boxplot_substance' },
              { kind: 'block', type: 'Ggf_histogram' },
              { kind: 'block', type: 'Ggf_histogram_substance' },
              { kind: 'block', type: 'Ggf_dens' },
              { kind: 'block', type: 'Ggf_dens_color' },
              { kind: 'block', type: 'Ggf_point' },
            ],
          },
          {
            kind: 'category',
            name: 'Statistical Inference (using HELPrct)',
            colour: '#039be5',
            contents: [
              { kind: 'block', type: 'proptest' },
              { kind: 'block', type: 'proptest2' },
              { kind: 'block', type: 'ttest' },
              { kind: 'block', type: 'ttest2' },
              { kind: 'block', type: 'xchisqtest' },
              { kind: 'block', type: 'anova' },
              { kind: 'block', type: 'slrsummary' },
            ],
          },
          {
            kind: 'category',
            name: 'Statistical Inference',
            colour: '#039be5',
            contents: [
              { kind: 'block', type: 'Gproptest' },
              { kind: 'block', type: 'Gproptest2' },
              { kind: 'block', type: 'Gttest' },
              { kind: 'block', type: 'Gttest2' },
              { kind: 'block', type: 'Gxchisqtest' },
              { kind: 'block', type: 'Ganova' },
              { kind: 'block', type: 'Gslrsummary' },
            ],
          },
          {
            kind: 'category',
            name: 'Bootstrap Methods (using HELPrct)',
            colour: '#039be5',
            contents: [
              // Univariate Bootstrap Methods
              { kind: 'block', type: 'bootstrap_ci_prop' },
              { kind: 'block', type: 'bootstrap_test_prop' },
              { kind: 'block', type: 'bootstrap_ci_mean' },
              { kind: 'block', type: 'bootstrap_test_mean' },
              { kind: 'block', type: 'bootstrap_ci_paired' },
              { kind: 'block', type: 'bootstrap_test_paired' },
              // Bivariate Bootstrap Methods
              { kind: 'block', type: 'bootstrap_ci_diffprop' },
              { kind: 'block', type: 'bootstrap_ci_diffmean' },
              { kind: 'block', type: 'bootstrap_ci_cor' },
              { kind: 'block', type: 'bootstrap_ci_lm' },
            ],
          },
          {
            kind: 'category',
            name: 'Bootstrap Methods',
            colour: '#039be5',
            contents: [
              // Univariate Bootstrap Methods
              { kind: 'block', type: 'Gbootstrap_ci_prop' },
              { kind: 'block', type: 'Gbootstrap_test_prop' },
              { kind: 'block', type: 'Gbootstrap_ci_mean' },
              { kind: 'block', type: 'Gbootstrap_test_mean' },
              { kind: 'block', type: 'Gbootstrap_ci_paired' },
              { kind: 'block', type: 'Gbootstrap_test_paired' },
              // Bivariate Bootstrap Methods
              { kind: 'block', type: 'Gbootstrap_ci_diffprop' },
              { kind: 'block', type: 'Gbootstrap_ci_diffmean' },
              { kind: 'block', type: 'Gbootstrap_ci_cor' },
              { kind: 'block', type: 'Gbootstrap_ci_lm' },
            ],
          },
        ],
      },
      {
        kind: 'category',
        name: 'ggplot2',
        colour: '#66BB6A',
        contents: [
          {
            kind: 'category',
            name: 'General Functionality',
            colour: '#FF6B5B',
            contents: [
              { kind: 'block', type: 'ggplot2_lib' },
              { kind: 'block', type: 'ggplot2_names' },
              { kind: 'block', type: 'ggplot2_glimpse' },
              { kind: 'block', type: 'ggplot2_head' },
              { kind: 'block', type: 'ggplot2_tail' },
              { kind: 'block', type: 'ggplot2_help' },
            ],
          },
          {
            kind: 'category',
            name: 'Numerical Summaries',
            colour: '#66BB6A',
            contents: [
              { kind: 'block', type: 'Gtallydata' },
              { kind: 'block', type: 'tallydata' },
            ],
          },
          {
            kind: 'category',
            name: 'Visualizations (using HELPrct)',
            colour: '#43A047',
            contents: [
              { kind: 'block', type: 'ggplot_init' },
              { kind: 'block', type: 'geom_point' },
              { kind: 'block', type: 'geom_line' },
              { kind: 'block', type: 'geom_bar' },
              { kind: 'block', type: 'geom_col' },
              { kind: 'block', type: 'geom_histogram' },
              { kind: 'block', type: 'geom_density' },
              { kind: 'block', type: 'geom_boxplot' },
              { kind: 'block', type: 'geom_violin' },
              { kind: 'block', type: 'geom_area' },
              { kind: 'block', type: 'geom_text' },
              { kind: 'block', type: 'geom_label' },
              { kind: 'block', type: 'geom_sf' },
              { kind: 'block', type: 'gf_bar' },
              { kind: 'block', type: 'gf_counts' },
              { kind: 'block', type: 'gf_boxplot' },
              { kind: 'block', type: 'gf_histogram' },
              { kind: 'block', type: 'gf_dens' },
              { kind: 'block', type: 'gf_point' },
              { kind: 'block', type: 'theme_minimal' },
              { kind: 'block', type: 'labs' },
              { kind: 'block', type: 'pie' },
            ],
          },
          {
            kind: 'category',
            name: 'Visualizations',
            colour: '#43A047',
            contents: [
              { kind: 'block', type: 'Gggplot_init' },
              { kind: 'block', type: 'Ggeom_point' },
              { kind: 'block', type: 'Ggeom_line' },
              { kind: 'block', type: 'Ggeom_bar' },
              { kind: 'block', type: 'Ggeom_col' },
              { kind: 'block', type: 'Ggeom_histogram' },
              { kind: 'block', type: 'Ggeom_density' },
              { kind: 'block', type: 'Ggeom_boxplot' },
              { kind: 'block', type: 'Ggeom_violin' },
              { kind: 'block', type: 'Ggeom_area' },
              { kind: 'block', type: 'Ggeom_text' },
              { kind: 'block', type: 'Ggeom_label' },
              { kind: 'block', type: 'Ggeom_sf' },
              { kind: 'block', type: 'Ggf_bar' },
              { kind: 'block', type: 'Ggf_counts' },
              { kind: 'block', type: 'Ggf_boxplot' },
              { kind: 'block', type: 'Ggf_histogram' },
              { kind: 'block', type: 'Ggf_dens' },
              { kind: 'block', type: 'Ggf_point' },
              { kind: 'block', type: 'Gtheme_minimal' },
              { kind: 'block', type: 'Glabs' },
              { kind: 'block', type: 'Gpie' },
            ],
          },
        ],
      },
    ],
  };

  /**
   * Renders the Blockly workspace component
   * @returns {JSX.Element} BlocklyWorkspace component with configured toolbox and handlers
   */

  return (
    <div
      className="workspace-container"
      style={{ position: 'relative', width: '100%', height: '100%' }}
    >
      {/* Help Button */}
      <div
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          zIndex: 100,
        }}
      >
        <button
          className="help-button"
          onClick={() => setIsHelpModalOpen(true)}
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '8px 12px',
            backgroundColor: 'var(--accent-h)',
            border: 'none',
            borderRadius: '4px',
            color: 'white',
            cursor: 'pointer',
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
          }}
        >
          <span style={{ marginRight: '5px' }}>Getting Started</span>
        </button>
      </div>

      {/* Blockly Workspace */}
      <BlocklyWorkspace
        className="blockly"
        toolboxConfiguration={toolboxCategories}
        initialXml={initialWorkspaceXml}
        workspaceConfiguration={workspaceConfig}
        onWorkspaceChange={handleWorkspaceChange}
      />

      {/* Getting Started Modal */}
      {isHelpModalOpen && (
        <div className="modal-overlay">
          <div
            className="modal-content"
            style={{
              maxWidth: '700px',
              maxHeight: '80vh',
              overflow: 'auto',
              padding: '2rem',
              borderRadius: '8px',
            }}
          >
            <h2
              style={{
                fontSize: '2rem',
                color: 'var(--primary-h)',
                marginTop: 0,
                marginBottom: '1.5rem',
              }}
            >
              Working with RBlocks
            </h2>

            <div
              style={{
                textAlign: 'left',
                marginBottom: '1.5rem',
                fontSize: '1.1rem',
                lineHeight: '1.6',
              }}
            >
              <h3
                style={{
                  fontSize: '1.5rem',
                  color: 'var(--primary-l)',
                  marginTop: '1.5rem',
                  marginBottom: '0.8rem',
                }}
              >
                Block Categories
              </h3>
              <p style={{ marginBottom: '1rem' }}>
                The blocks are organized into several categories:
              </p>
              <ul style={{ paddingLeft: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <strong>General Functions:</strong> Basic R functions for data exploration.
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <strong>mosaic:</strong> Functions from the mosaic package, categorized as:
                  <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>Numerical Summaries:</strong> Calculate statistics from data.
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>Data Visualization:</strong> Create plots and charts.
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>Statistical Inference:</strong> Tests like t-tests, ANOVA, etc.
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>Bootstrap Methods:</strong> Resampling techniques for confidence
                      intervals and hypothesis tests.
                    </li>
                  </ul>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <strong>ggplot2:</strong> Advanced data visualization blocks.
                </li>
              </ul>

              <h3
                style={{
                  fontSize: '1.5rem',
                  color: 'var(--primary-l)',
                  marginTop: '1.5rem',
                  marginBottom: '0.8rem',
                }}
              >
                Working with Blocks
              </h3>
              <ol style={{ paddingLeft: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  Drag blocks from the toolbox on the left into your workspace.
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  Blocks connect vertically - the output flows from top to bottom.
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  HelpRCT blocks have dropdown menus for selecting variables.
                </li>
              </ol>

              <h3
                style={{
                  fontSize: '1.5rem',
                  color: 'var(--primary-l)',
                  marginTop: '1.5rem',
                  marginBottom: '0.8rem',
                }}
              >
                Tips for Success
              </h3>
              <ul style={{ paddingLeft: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  Hover over blocks to see tooltips explaining their function.
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  Check the output panel after running your code.
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  When using paired data blocks, make sure to select appropriate variables for
                  comparison.
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  For bootstrap methods, 5000 iterations is typically sufficient for stable results.
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  Save your work regularly using the Save button in the toolbar.
                </li>
              </ul>
            </div>

            <div
              className="modal-buttons"
              style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}
            >
              <button
                type="button"
                className="base-button"
                onClick={() => setIsHelpModalOpen(false)}
                style={{
                  margin: '0',
                  fontSize: '1.1rem',
                  height: '3rem',
                  width: '10rem',
                  backgroundColor: 'var(--secondary-h)',
                  borderTop: '2px solid var(--secondary-m)',
                  borderLeft: '2px solid var(--secondary-m)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
