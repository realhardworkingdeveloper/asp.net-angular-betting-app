﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Witter.Models;

namespace Witter.Data
{
    public interface IMatchRepository
    {
        IEnumerable<Match> GetMatches(bool started, bool ended);
        IEnumerable<Match> GetTeamsMatches(int teamId);
        Task<Match> GetMatch(int id);
        void Add(Match match);
        void Delete(Match match);
    }
}
