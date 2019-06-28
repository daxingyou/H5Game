PROJECT(dbmod_fix_names2)

ADD_DEFINITIONS("-g --std=c++0x  -O3 -msse2 -mmmx -mfpmath=sse")

INCLUDE_DIRECTORIES("./")
INCLUDE_DIRECTORIES("./mods")
INCLUDE_DIRECTORIES("../libutil")
INCLUDE_DIRECTORIES("../libutil/kvdb")
INCLUDE_DIRECTORIES("../libutil/gdb")

ADD_LIBRARY(dbmod_fix_names2 SHARED "./mods/dbmod_fix_names2.cpp")