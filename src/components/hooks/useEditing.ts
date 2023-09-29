import { useState } from 'react';

const useEditing = (initialValue: boolean = false) => {
  const [isEditing, setIsEditing] = useState(initialValue);
  
  const toggleEditing = () => setIsEditing(prev => !prev);

  return { isEditing, setIsEditing, toggleEditing };
};

export default useEditing;
