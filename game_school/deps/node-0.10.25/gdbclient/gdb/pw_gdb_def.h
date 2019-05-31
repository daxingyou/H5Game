#ifndef _pw_gdb_def_
#define _pw_gdb_def_

namespace gdb
{

	enum ClientFlags
	{
		CLIENT_FLAGS_MERGE_RESPONSE = 0x0001,

		CLIENT_FLAGS_DEFAULT = CLIENT_FLAGS_MERGE_RESPONSE,
	};

	namespace version0
	{
		enum
		{
			CMD_AUTHENTICATION,

			CMD_SELECT_DATABASE,
			CMD_CREATE_DATABASE,
			CMD_DELETE_DATABASE,
			CMD_LIST_DATABASES,
			CMD_LOAD_DATABASE,
			CMD_UNLOAD_DATABASE,
			CMD_COPY_DATABASE,

			// ***************************************************************

			CMD_DATABASE_BEGAN = 11,

			CMD_RAWDEL,
			CMD_REMOVE_ALL,
			CMD_DUMP,

			CMD_HSET,
			CMD_HGET,
			CMD_HSETNX,
			CMD_HSETOW,
			CMD_HDEL,
			CMD_HMULTISET,
			CMD_HMULTIGET,
			CMD_HMULTIDEL,
			CMD_HINCR,
			CMD_HINCR_FLOAT,
			CMD_HKEYS,
			CMD_HVALS,
			CMD_HKEYVALS,
			CMD_HSCAN,
			CMD_HSIZE,
			CMD_HDROP,

			CMD_HCROSS_KEYS,
			CMD_HCROSS_VALS,
			CMD_HCROSS_KEYVALS,

			CMD_ZSET,
			CMD_ZDEL,
			CMD_ZGET,
			CMD_ZTOP,
			CMD_ZRTOP,
			CMD_ZDROP,
			CMD_ZSIZE,
			CMD_ZLIST,

			CMD_ZSET_ENDED = 100,
			CMD_HLIST,

			CMD_DATABASE_ENDED,

			// ***************************************************************

			CMD_SYS_BEGAN = 200,
			CMD_SYS_ADDUSER,
			CMD_SYS_DELUSER,
			CMD_SYS_MODUSER,
			CMD_SYS_ENDED,
			// ***************************************************************

			CMD_SLAVE_BEGAN = 300,

			CMD_SLAVE_CS_SYNC,

			CMD_SLAVE_SC_SYNC,
			CMD_SLAVE_SC_SYNC_ENDED,

			CMD_SLAVE_SC_OPLOG_PUT,
			CMD_SLAVE_SC_OPLOG_DEL,

			CMD_SLAVE_ENDED,

			// ***************************************************************

			CMD_SLAVE_MANAGE_ENDED,
		};
	}

	enum
	{
		CMD_AUTHENTICATION = 500,

		CMD_SELECT_DATABASE,
		CMD_CREATE_DATABASE,
		CMD_DELETE_DATABASE,
		CMD_LIST_DATABASES,
		CMD_LOAD_DATABASE,
		CMD_UNLOAD_DATABASE,
		CMD_COPY_DATABASE,
		CMD_PING,

		CMD_CLIENT_FLAGS = 580,

		// ***************************************************************

		CMD_DATABASE_BEGAN = 600,

		CMD_RAWDEL,
		CMD_REMOVE_ALL,
		CMD_DUMP,
		CMD_RAWSET,

		CMD_HBEGAN = 700,
			CMD_HSET,
			CMD_HGET,
			CMD_HSETNX,
			CMD_HSETOW,
			CMD_HDEL,
			CMD_HMULTISET,
			CMD_HMULTISETNX,
			CMD_HMULTISET_LOOSE,
			CMD_HMULTISETNX_LOOSE,
			CMD_HMULTIGET,
			CMD_HMULTIDEL,
			CMD_HMULTIDEL_LOOSE,
			CMD_HINCR,
			CMD_HINCR_FLOAT,
			CMD_HKEYS,
			CMD_HVALS,
			CMD_HKEYVALS,
			CMD_HSCAN,
			CMD_HSIZE,
			CMD_HDROP,
			CMD_HMULTIDROP,
			CMD_HINDEX_QUERY,
			CMD_HINDEX_QUERY_RANGE,
			CMD_HQUERY,
			CMD_HUPDATE,

			CMD_HCROSS_KEYS = 900,
			CMD_HCROSS_VALS,
			CMD_HCROSS_KEYVALS,
			CMD_HCROSS_DROP,
			CMD_HCROSS_QUERY,
			CMD_HCROSS_UPDATE,

			CMD_HCREATE_INDEX = 920,
			CMD_HDELETE_INDEX,
			CMD_HLIST_INDEX,

		CMD_HENDED,

		CMD_ZBEGAN = 1000,
			CMD_ZSET,
			CMD_ZDEL,
			CMD_ZGET,
			CMD_ZTOP,
			CMD_ZRTOP,
			CMD_ZDROP,
			CMD_ZSIZE,
			CMD_ZLIST,
			CMD_ZDROPEX,
		CMD_ZENDED,

		CMD_DATABASE_ENDED,

		// ***************************************************************

		CMD_SYS_BEGAN = 1100,
			CMD_SYS_ADDUSER,
			CMD_SYS_DELUSER,
			CMD_SYS_MODUSER,
		CMD_SYS_ENDED,
		
		// ***************************************************************

		CMD_SLAVE_BEGAN = 1200,
			CMD_SLAVE_CS_SYNC,
			CMD_SLAVE_SC_SYNC,
			CMD_SLAVE_SC_SYNC_ENDED,
			CMD_SLAVE_SC_OPLOG_PUT,
			CMD_SLAVE_SC_OPLOG_DEL,
			CMD_SLAVE_SC_OPLOG_CONSISTENT_POINT,
			CMD_SLAVE_SC_OPLOG_CLEAR,
		CMD_SLAVE_ENDED,

		// ***************************************************************

		CMD_SLAVE_MANAGE_BEGAN = 1300,
			CMD_SLAVE_MANAGE_BACKUP,
			CMD_SLAVE_MANAGE_ADD,
			CMD_SLAVE_MANAGE_DEL,
		CMD_SLAVE_MANAGE_ENDED,

		// ***************************************************************

		CMD_CLIENTSCRIPT_BEGAN = 1400,
			CMD_CLIENTSCRIPT_STARTUP,
			CMD_CLIENTSCRIPT_CLEANUP,
			CMD_CLIENTSCRIPT_EXECUTE,
			CMD_CLIENTSCRIPT_FILTER,
		CMD_CLIENTSCRIPT_ENDED,

		CMD_SERVERMODULE_BEGAN = 1500,
			CMD_SERVERMODULE_LOAD,
			CMD_SERVERMODULE_EXEC,
			CMD_SERVERMODULE_UNLOAD,
		CMD_SERVERMODULE_ENDED,

		CMD_NUM,
	};

	enum
	{
		FAILED_SUCCESSFUL = 0,
		FAILED_NOFOUND,
		FAILED_CORRUPTION,
		FAILED_NOTSUPPORTED,
		FAILED_INVALIDARGUMENT,
		FAILED_IOERROR,

		FAILED_EXISTS = 10,
		FAILED_EXISTS_INVALID_DATA,
		FAILED_MESSAGE = 1000,
	};
}

#endif // _pw_gdb_def_