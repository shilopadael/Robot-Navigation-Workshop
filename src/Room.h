//
// Created by ofirhelerman on 4/19/23.
//

#ifndef ROBOT_NAVIGATION_WORKSHOP_ROOM_H
#define ROBOT_NAVIGATION_WORKSHOP_ROOM_H

#include <utility>

/**
 * A class representing a room in the map.
 */
class Room {
private:
    /// The entry point to the room.
    std::pair<double, double> entryPoint;
    /// The room's ID.
    int roomId;

public:
    /**
     * Constructs a new room.
     * @param entryPoint The entry point to the room.
     * @param roomId The room's ID.
     */
    Room(std::pair<double, double> entryPoint, int roomId) : entryPoint(std::move(entryPoint)), roomId(roomId) {}

    /**
     * Gets the entry point to the room.
     * @return The entry point to the room.
     */
    std::pair<double, double> getEntryPoint() const;

    /**
     * Gets the room's ID.
     * @return The room's ID.
     */
    int getRoomId() const;
};


#endif //ROBOT_NAVIGATION_WORKSHOP_ROOM_H
