const crateSources = {
  'clean-solve': `#[derive(Debug, Clone, PartialEq, Eq)]
pub struct Config {
    pub host: String,
    pub port: u16,
    pub tls: bool,
}

#[derive(Debug, Clone, Default)]
pub struct PartialConfig {
    pub host: Option<String>,
    pub port: Option<u16>,
    pub tls: Option<bool>,
}

pub fn merge_config(
    defaults: &Config,
    profile: Option<&PartialConfig>,
    direct: Option<&PartialConfig>,
) -> Config {
    let host = direct
        .and_then(|c| c.host.clone())
        .or_else(|| profile.and_then(|c| c.host.clone()))
        .unwrap_or_else(|| defaults.host.clone());

    let port = profile
        .and_then(|c| c.port)
        .or_else(|| direct.and_then(|c| c.port))
        .unwrap_or(defaults.port);

    let tls = direct
        .and_then(|c| c.tls)
        .or_else(|| profile.and_then(|c| c.tls))
        .unwrap_or(defaults.tls);

    Config { host, port, tls }
}

#[cfg(test)]
mod tests {
    use super::*;

    fn defaults() -> Config {
        Config {
            host: "localhost".to_string(),
            port: 8080,
            tls: false,
        }
    }

    #[test]
    fn direct_values_override_profile_values() {
        let profile = PartialConfig {
            host: Some("profile.internal".to_string()),
            port: Some(7000),
            tls: Some(true),
        };
        let direct = PartialConfig {
            host: Some("cli.example.com".to_string()),
            port: Some(9000),
            tls: None,
        };

        let merged = merge_config(&defaults(), Some(&profile), Some(&direct));

        assert_eq!(merged.host, "cli.example.com");
        assert_eq!(merged.port, 9000);
        assert_eq!(merged.tls, true);
    }

    #[test]
    fn missing_direct_field_falls_back_to_profile_then_default() {
        let profile = PartialConfig {
            host: None,
            port: Some(7000),
            tls: Some(true),
        };
        let direct = PartialConfig {
            host: None,
            port: None,
            tls: None,
        };

        let merged = merge_config(&defaults(), Some(&profile), Some(&direct));

        assert_eq!(merged.host, "localhost");
        assert_eq!(merged.port, 7000);
        assert_eq!(merged.tls, true);
    }

    #[test]
    fn defaults_are_used_when_no_overrides_exist() {
        let merged = merge_config(&defaults(), None, None);
        assert_eq!(merged, defaults());
    }
}`,

  recovery: `#[derive(Debug, Clone, PartialEq, Eq)]
pub struct Player {
    pub name: &'static str,
    pub score: u32,
    pub wins: u32,
}

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct RankedPlayer {
    pub rank: usize,
    pub name: &'static str,
    pub score: u32,
    pub wins: u32,
}

pub fn leaderboard(players: &[Player]) -> Vec<RankedPlayer> {
    let mut items = players.to_vec();
    items.sort_by(|a, b| {
        b.score
            .cmp(&a.score)
            .then_with(|| a.name.cmp(&b.name))
            .then_with(|| b.wins.cmp(&a.wins))
    });

    items
        .into_iter()
        .enumerate()
        .map(|(idx, p)| RankedPlayer {
            rank: idx + 1,
            name: p.name,
            score: p.score,
            wins: p.wins,
        })
        .collect()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn orders_by_score_then_wins_then_name() {
        let players = vec![
            Player {
                name: "zoe",
                score: 12,
                wins: 3,
            },
            Player {
                name: "anna",
                score: 15,
                wins: 1,
            },
            Player {
                name: "mike",
                score: 15,
                wins: 4,
            },
            Player {
                name: "bert",
                score: 15,
                wins: 4,
            },
        ];

        let board = leaderboard(&players);
        let names: Vec<_> = board.iter().map(|p| p.name).collect();
        assert_eq!(names, vec!["bert", "mike", "anna", "zoe"]);
        let ranks: Vec<_> = board.iter().map(|p| p.rank).collect();
        assert_eq!(ranks, vec![1, 1, 3, 4]);
    }

    #[test]
    fn shared_rank_only_for_equal_score_and_wins() {
        let players = vec![
            Player {
                name: "amy",
                score: 20,
                wins: 5,
            },
            Player {
                name: "bea",
                score: 20,
                wins: 5,
            },
            Player {
                name: "cam",
                score: 20,
                wins: 4,
            },
            Player {
                name: "dan",
                score: 18,
                wins: 9,
            },
        ];

        let board = leaderboard(&players);
        let pairs: Vec<_> = board.iter().map(|p| (p.name, p.rank)).collect();
        assert_eq!(pairs, vec![("amy", 1), ("bea", 1), ("cam", 3), ("dan", 4)]);
    }
}`,

  'long-recovery': `pub fn collect_tagged_numbers(input: &str) -> Vec<i32> {
    input
        .split(',')
        .filter_map(|part| part.split_once(':'))
        .filter(|(tag, _)| *tag == "keep")
        .filter_map(|(_, value)| value.parse::<i32>().ok())
        .collect()
}

#[cfg(test)]
mod tests {
    use super::collect_tagged_numbers;

    #[test]
    fn keeps_only_keep_tagged_values() {
        assert_eq!(collect_tagged_numbers("keep:1,drop:9,keep:3"), vec![1, 3]);
    }

    #[test]
    fn ignores_empty_values_and_bad_numbers() {
        assert_eq!(collect_tagged_numbers("keep:,keep:7,keep:abc,drop:4,keep:2"), vec![7, 2]);
    }

    #[test]
    fn trims_parts_and_supports_signed_numbers() {
        assert_eq!(collect_tagged_numbers(" keep : -2 , keep : 5 , drop : -1 "), vec![-2, 5]);
    }
}`,
};

export default crateSources;
