const initialState = {
  vendorFormFields: [
    {
      type: 'text',
      label: 'First Name',
      defaultValue: null,
      style: { width: '45%' },
    },
    {
      style: { width: '45%' },
      type: 'text',
      label: 'Last Name',
      defaultValue: null,
    },
    {
      style: { width: '93%' },
      type: 'email',
      label: 'Email',
      defaultValue: null,
    },
    {
      style: { width: '23%' },
      type: 'text',
      label: 'Country',
      defaultValue: null,
    },
    {
      style: { width: '23%' },
      type: 'number',
      label: 'Country Code',
      defaultValue: null,
    },
    {
      style: { width: '42%' },
      type: 'number',
      label: 'Phone Number',
      defaultValue: null,
    },
    {
      style: { width: '93%' },
      type: 'text',
      label: 'Address',
      defaultValue: null,
    },
    {
      style: { width: '93%' },
      type: 'text',
      label: 'City',
      defaultValue: null,
    },
    {
      style: { width: '93%' },
      type: 'number',
      label: 'Pin',
      defaultValue: null,
    },
  ],
  vendorTableData: [
    { id: 1, name: 'James', mobile: 236479515, address: 'Florida' },
    { id: 1, name: 'Prasenjit', mobile: 789452256, address: 'Chandigarh' },
    { id: 1, name: 'Ashish', mobile: 6546512111, address: 'Chandigarh' },
    { id: 1, name: 'Deepak', mobile: 5454151255, address: 'Gurgaon' },
    { id: 1, name: 'Rajat', mobile: 7379514571, address: 'Kanpur' },
  ],
};

const vendorReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default vendorReducer;
