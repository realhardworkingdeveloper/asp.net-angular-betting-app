using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Witter.Data;
using Witter.Dtos;
using Witter.Models;

namespace Witter.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<UserForRegisterDto, User>();
            CreateMap<User, UserForReturnDto>();
            CreateMap<MatchForCreateDto, Match>();
            CreateMap<User, UserForAdminDto>();
            CreateMap<LeagueForCreateDto, League>();
            CreateMap<UserForBanDto, User>();
            CreateMap<League, LeagueForListDto>();
        }
    }
}
