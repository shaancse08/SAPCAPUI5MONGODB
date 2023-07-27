const getExpands = async (aColumns) => {
  if(!aColumns){
    return [];
  }
  const aExpands = [];
  aColumns.forEach((column) => {
    if (typeof column === "object") {
      if (column["ref"]) {
        aExpands.push({
            name: column["ref"][0]
        });
      }
    }
  });
  return aExpands;
};

const getTopSkip = async (oLimit) => {
  //TODO return Top and Skip

  const oTopSkip = {
    top: 0,
    skip: 0,
  };
  if(!oLimit){
    return oTopSkip;
  }

  const { rows, offset } = oLimit;

  if (rows) {
    oTopSkip.top = rows.val;
  }
  if (offset) {
    oTopSkip.skip = offset.val;
  }

  return oTopSkip;
};

module.exports = {
  getExpands,
  getTopSkip,
};
