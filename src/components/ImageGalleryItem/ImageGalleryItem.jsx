import { Component } from 'react';

import {StyledGalleryItem, StyledGalleryImg} from './ImageGalleryItem.styled'

export class GalleryItem extends Component {
  render() {
    return (
      <StyledGalleryItem>
        <StyledGalleryImg src="" alt="" />
      </StyledGalleryItem>
    );
  }
}
