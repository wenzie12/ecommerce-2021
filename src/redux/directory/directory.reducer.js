const INITIAL_STATE = {
  sections: [{
    title: 'hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    linkUrl: 'shop/hats',
    id: 1
  },
  {
    title: 'jackets',
    imageUrl: 'http://i.ibb.co/px2tCc3/jackets.png',
    linkUrl: 'shop/jackets',
    id: 2
  },
  {
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    linkUrl: 'shop/sneakers',
    id: 3
  },
  {
    title: 'womens',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    linkUrl: 'shop/womens',
    size: 'large',
    id: 4
  },
  {
    title: 'mens',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    size: 'large',
    linkUrl: 'shop/mens',
    id: 5
  }]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default directoryReducer;