package com.sigma.worldskitchenserver.mapper;

import com.sigma.worldskitchenserver.dto.User.RecentActivityDto;
import com.sigma.worldskitchenserver.model.RecentActivity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface RecentActivityMapper {

    RecentActivityDto toRecentActivityDto(RecentActivity recentActivity);
}
