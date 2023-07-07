const response = (res, status, message, data) => {
  let response_structure;
  if (status === 200) {
    response_structure = {
      status: status,
      message: message,
      data: data,
    };
    return res.status(200).json(response_structure);
  } else if (status === 500) {
    response_structure = {
      status: status,
      message: message,
      data: data,
    };
    return res.status(500).json(response_structure);
  } else {
    response_structure = {
      status: status,
      message: message,
      data: data,
    };
  }
};

module.exports = response;
