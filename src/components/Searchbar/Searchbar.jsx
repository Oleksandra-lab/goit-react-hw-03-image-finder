import { Component } from 'react';

import { StyledHeader, StyledSearchForm, StyledStyledSearchFormBtn, StyledStyledSearchFormInput} from './Searchbar.styled.jsx'

export class Searchbar extends Component {
  render() {
    return (
      <StyledHeader>
        <StyledSearchForm>
          <StyledStyledSearchFormBtn type="submit" >
            <span class="button-label">Search</span>
          </StyledStyledSearchFormBtn>

          <StyledStyledSearchFormInput
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </StyledSearchForm>
      </StyledHeader>
    );
  }
}
