# Find playerc++ library and headers

find_package(PkgConfig REQUIRED)
pkg_check_modules(PLAYERCXX REQUIRED playerc++)

set(PLAYERCXX_LIBRARIES ${PLAYERCXX_LIBRARIES} ${PLAYERCXX_LDFLAGS})
set(PLAYERCXX_INCLUDE_DIRS ${PLAYERCXX_INCLUDE_DIRS} ${PLAYERCXX_CFLAGS})

# Report results
if(PLAYERCXX_FOUND)
    set(PLAYERCXX_LIBRARIES ${PLAYERCXX_LIBRARIES} PARENT_SCOPE)
    set(PLAYERCXX_INCLUDE_DIRS ${PLAYERCXX_INCLUDE_DIRS} PARENT_SCOPE)
endif()
