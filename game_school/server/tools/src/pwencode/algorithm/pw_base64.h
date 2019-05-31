#ifndef _pw_base64_
#define _pw_base64_

#include <string>

namespace pwutils
{
	extern std::string base64_encode(const char* buf,int len);
	extern std::string base64_decode(const char* buf,int len);
}

#endif // _pw_base64_