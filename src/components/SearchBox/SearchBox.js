import { useState } from 'react';
import {Wrapper, Input, Button } from './SearchBox.styled';
import { HiSearch } from "react-icons/hi";
export const SearchBox = ({ onSubmit }) => {

  const [searchQuery, setSearchQuery] = useState('');
 

  const handleSubmit = e => {
    e.preventDefault();
   onSubmit(searchQuery);
    setSearchQuery('');
  };

  const handleInput = evt => {
    setSearchQuery(evt.currentTarget.value.trim());
  };

  return (
    <form onSubmit={handleSubmit}>
      <Wrapper>
 
           <Input
        placeholder="Enter movie..."
        type="text"
        name="searchQuery"
        value={searchQuery}
        onChange={handleInput}
        required
        autoFocus
      />
            <Button>
        <HiSearch size="25" />
      </Button> 
      </Wrapper>
   
    </form>
  );
};
