import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';

import { PreviewContainer, PreviewTitle, PreviewItemContainer } from './collection-preview.styles';

const CollectionPreview = ({ title, items }) => (
	<PreviewContainer>
		<PreviewTitle>{title.toUpperCase()}</PreviewTitle>
		<PreviewItemContainer>
			{items
				.filter((item, idx) => idx < 4)
				.map((item) => <CollectionItem key={item.id} item={item} />)}
		</PreviewItemContainer>
	</PreviewContainer>
);

export default CollectionPreview;
