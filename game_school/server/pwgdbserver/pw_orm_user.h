#ifndef _pw_orm_user_
#define _pw_orm_user_

#include "pw_types.h"
#include "snappy/snappy.h"
#include "kvdb/pw_fixed_string.h"
#include "kvdb/pw_kvorm.h"
#include "kvdb/pw_kvorm_array.h"
#include "kvdb/pw_kvorm_hashmap.h"
#include "bson/bson.h"
#include "bson/bsonobjbuilder.h"

namespace orm
{


	class User : public pwutils::KvormBase
	{
		RTTI(User,pwutils::KvormBase);
	public:
		User();
		virtual ~User();
	public:
		virtual bool is_default_value() const; // override
	public:
		User* clone() const;
	public:
		virtual std::string rawkey();
		virtual std::string getkey();
		virtual std::string getmeta();
	public:
		static const char* meta() { return "user"; }
		static const int64 meta_hash = 1920115394819;
		static const char* prefix() { return "user_"; }
	public:
		virtual void to_bson(std::string& __buf) const; // override
		virtual void to_bson(bson::bo& __obj) const; // override
		virtual void to_snappy_buffer(std::string& __buf) const; // override
		virtual void from_bson(const char* __data,size_t __size); // override
		virtual void from_bson(const bson::bo& __obj); // override
		virtual void from_snappy_buffer(const char* __data,size_t __size); // override
		virtual void from_snappy_buffer(const std::string& __buf); // override
	public:
		virtual int64 hash_make(int64 seed);
		virtual int64 hash_origin() { return __hash; }
		virtual void  hash_update(int64 hash) { __hash = hash; }
	public:
		virtual void set_autoincr(int64 key); // override
	public:
		virtual int64 get_masterid() { return 0; } // override
		virtual void  set_masterid(int64 v) { } // override
		virtual void  set_masterid(const char* v) { } // override
		virtual const char* get_masterstrid() { return ""; } // override
	public:
		const char* get_name() const;
		const char* get_pswd() const;
		bool get_sysuser() const;

		void set_name(const char* value);
		void set_pswd(const char* value);
		void set_sysuser(bool value);

	public:
		pwutils::fixed_string<64> name;
		pwutils::fixed_string<64> pswd;
		bool sysuser;
	public:
		int64 __hash;
	};
}

#endif // _pw_orm_user_