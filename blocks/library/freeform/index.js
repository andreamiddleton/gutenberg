/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { source } from '@wordpress/block-api';

/**
 * Internal dependencies
 */
import './editor.scss';
import { registerBlockType, setUnknownTypeHandlerName } from '../../api';
import OldEditor from './old-editor';

const { prop } = source;

registerBlockType( 'core/freeform', {
	title: __( 'Classic Text' ),

	icon: 'editor-kitchensink',

	category: 'formatting',

	attributes: {
		content: {
			type: 'string',
			source: prop( 'innerHTML' ),
		},
	},

	edit: OldEditor,

	save( { attributes } ) {
		const { content } = attributes;
		return content;
	},
} );

setUnknownTypeHandlerName( 'core/freeform' );
