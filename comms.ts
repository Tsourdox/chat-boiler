export interface ServerToClientEvents {
  chatMessage: (message: string) => void;
  welcome: (message: string) => void;
}

export interface ClientToServerEvents {
  chatMessage: (message: string) => void;
}

export interface InterServerEvents {
  ping: () => void;
}

export interface ServerSocketData {
  name: string;
  age: number;
}
