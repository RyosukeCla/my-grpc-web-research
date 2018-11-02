// package: greeter
// file: greeter.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as greeter_pb from "./greeter_pb";

interface IGreeterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sayHello: IGreeterService_ISayHello;
}

interface IGreeterService_ISayHello extends grpc.MethodDefinition<greeter_pb.HelloRequest, greeter_pb.HelloReply> {
    path: string; // "/greeter.Greeter/SayHello"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<greeter_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<greeter_pb.HelloRequest>;
    responseSerialize: grpc.serialize<greeter_pb.HelloReply>;
    responseDeserialize: grpc.deserialize<greeter_pb.HelloReply>;
}

export const GreeterService: IGreeterService;

export interface IGreeterServer {
    sayHello: grpc.handleUnaryCall<greeter_pb.HelloRequest, greeter_pb.HelloReply>;
}

export interface IGreeterClient {
    sayHello(request: greeter_pb.HelloRequest, callback: (error: Error | null, response: greeter_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHello(request: greeter_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: greeter_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHello(request: greeter_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: greeter_pb.HelloReply) => void): grpc.ClientUnaryCall;
}

export class GreeterClient extends grpc.Client implements IGreeterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public sayHello(request: greeter_pb.HelloRequest, callback: (error: Error | null, response: greeter_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: greeter_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: greeter_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: greeter_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: greeter_pb.HelloReply) => void): grpc.ClientUnaryCall;
}
