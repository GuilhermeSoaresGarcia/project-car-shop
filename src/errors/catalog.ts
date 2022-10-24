export enum ErrorTypes {
  EntityNotFound = 'EntityNotFound',
  InvalidMongoId = 'InvalidMongoId',
  EmptyBody = 'EmptyBody',
}

type ErrorResponseObject = {
  message: string;
  httpStatus: number;
};

export type ErrorCatalog = {
  [key in ErrorTypes]: ErrorResponseObject
};

export const errorCatalog: ErrorCatalog = {
  EntityNotFound: {
    message: 'Object not found',
    httpStatus: 404,
  },

  InvalidMongoId: {
    message: 'Id must have 24 hexadecimal characters',
    httpStatus: 400,
  },

  EmptyBody: {
    message: 'EmptyBody',
    httpStatus: 400,
  },
};