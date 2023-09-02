import React from 'react';

const useModal = () => {
  const [isOpen, setOpen] = React.useState(false);

  const toggleModal = () => {
    setOpen((prev) => !prev);
  };

  return [isOpen, toggleModal];
};

export default useModal;
