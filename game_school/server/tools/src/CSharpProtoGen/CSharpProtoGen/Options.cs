// Generated by ProtoGen, Version=2.3.0.277, Culture=neutral, PublicKeyToken=8fd7408b07f8d2cd.  DO NOT EDIT!

using pb = global::Google.ProtocolBuffers;
using pbc = global::Google.ProtocolBuffers.Collections;
using pbd = global::Google.ProtocolBuffers.Descriptors;
using scg = global::System.Collections.Generic;
namespace pwngs {
  
  public static partial class Options {
  
    #region Extension registration
    public static void RegisterAllExtensions(pb::ExtensionRegistry registry) {
      registry.Add(global::pwngs.Options.Msgid);
    }
    #endregion
    #region Extensions
    public const int MsgidFieldNumber = 54321;
    public static pb::GeneratedExtensionBase<int> Msgid;
    #endregion
    
    #region Static variables
    #endregion
    #region Descriptor
    public static pbd::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbd::FileDescriptor descriptor;
    
    static Options() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          "Cg1vcHRpb25zLnByb3RvEgVwd25ncxogZ29vZ2xlL3Byb3RvYnVmL2Rlc2Ny" + 
          "aXB0b3IucHJvdG86MAoFbXNnaWQSHy5nb29nbGUucHJvdG9idWYuTWVzc2Fn" + 
          "ZU9wdGlvbnMYsagDIAEoBQ==");
      pbd::FileDescriptor.InternalDescriptorAssigner assigner = delegate(pbd::FileDescriptor root) {
        descriptor = root;
        global::pwngs.Options.Msgid = pb::GeneratedSingleExtension<int>.CreateInstance(global::pwngs.Options.Descriptor.Extensions[0]);
        return null;
      };
      pbd::FileDescriptor.InternalBuildGeneratedFileFrom(descriptorData,
          new pbd::FileDescriptor[] {
          global::Google.ProtocolBuffers.DescriptorProtos.DescriptorProtoFile.Descriptor, 
          }, assigner);
    }
    #endregion
    
  }
}
