// import { createSelector, Selector } from '@reduxjs/toolkit';

// import { createCachedSelector } from '../../_common/selectors.cache';
// import {
//   BookmakerType,
//   GridBet,
//   GridBookmaker,
//   GridOdds,
//   isOddsActive,
// } from '../interfaces';

// import { selectAllBets, selectBetEntities } from './products.slice';
// import {
//   selectAllBookmakers,
//   selectBookmakerEntities,
//   selectBookmakerIds,
//   selectExchangeCodes,
//   selectSportsbookCodes,
// } from './bookmakers.slice';
// import {
//   selectMarketsInViewPort,
//   selectReadyToConnectMarkets,
// } from './diffusion-topics.slice';
// import {
//   calcBestOdds,
//   isBookieExchange,
//   isBookieSportsBook,
//   isInvalidForSorting,
//   isOddsInvalidForSorting,
//   isValidForBestOdds,
//   roundOdds,
// } from './helpers';
// import { selectedMarketFilterId } from './market-filters.slice';
// import {
//   selectAreMarketDataPending,
//   selectMarketsRequestsEntities,
// } from './markets-requests.slice';
// import { selectAllMarkets } from './markets.slice';
// import {
//   getOddsState,
//   OddsState,
//   selectOddsByBetId,
//   selectOddsByBetIdAndBookie,
//   selectOddsEntitiesByBetId,
//   selectOddsEntitiesByBetIds,
// } from './odds.slice';
// import { SubeventFeatureState } from './store';
// import {
//   selectAwayTeamName,
//   selectHomeTeamName,
// } from './subevent-config.slice';
// import { selectPreferredBookie } from './subevent-meta.slice';
// import { getUserOptionsState, selectOddsFormat } from './user-options.slice';

// const betIdsForMarkets = ({ marketId }: { marketId: number }) => {
//   return createSelector(selectAllBets, bets => {
//     return bets.filter(b => b.marketId === marketId).map(b => b.ocBetId);
//   });
// };

// export const selectMyBookmakers: Selector<
//   SubeventFeatureState,
//   string[]
// > = createSelector(
//   getUserOptionsState,
//   selectAllBookmakers,
//   (userOptions, bookmakers) => {
//     const bookmakerCodes = bookmakers.map(bookie => bookie.bookmakerCode);
//     const myBookmakers: string[] =
//       userOptions.myBookmakers?.filter(
//         item => bookmakerCodes.indexOf(item) !== -1,
//       ) || [];
//     return myBookmakers;
//   },
// );

// export const selectNumberOfMyBookmakers = createSelector(
//   selectMyBookmakers,
//   myBookmakers => myBookmakers.length,
// );

// export const selectUserHasFavouriteBookmakers = createSelector(
//   selectMyBookmakers,
//   myBookmakers => myBookmakers.length > 0,
// );

// export const selectNonFavouritedSportsbooks: Selector<
//   SubeventFeatureState,
//   string[]
// > = createSelector(
//   selectMyBookmakers,
//   selectSportsbookCodes,
//   (myBookmakers, allBookmakers) => {
//     const remainingBookmakers = allBookmakers.filter(
//       item => myBookmakers.indexOf(item) < 0,
//     );
//     return remainingBookmakers as string[];
//   },
// );

// export const selectNumberOfNonFavouritedSportsbooks: Selector<
//   SubeventFeatureState,
//   number
// > = createSelector(selectNonFavouritedSportsbooks, nonFavouritedSportsbooks => {
//   return nonFavouritedSportsbooks.length;
// });

// export const selectNonFavouritedExchanges: Selector<
//   SubeventFeatureState,
//   string[]
// > = createSelector(
//   selectMyBookmakers,
//   selectExchangeCodes,
//   (myBookmakers, allExchanges) => {
//     const remainingBookmakers = allExchanges.filter(
//       item => myBookmakers.indexOf(item) < 0,
//     );
//     return remainingBookmakers as string[];
//   },
// );

// export const selectNumberOfNonFavouritedExchanges: Selector<
//   SubeventFeatureState,
//   number
// > = createSelector(selectNonFavouritedExchanges, nonFavouritedExchanges => {
//   return nonFavouritedExchanges.length;
// });

// export const selectSportbooksOdds = (
//   betId: number,
// ): Selector<SubeventFeatureState, GridOdds[]> =>
//   createSelector(
//     selectOddsEntitiesByBetId(betId),
//     selectBookmakerEntities,
//     (oddsEntities, bookmakerEntities) => {
//       if (typeof bookmakerEntities === 'undefined') {
//         return [] as GridOdds[];
//       }
//       return Object.values(oddsEntities).filter(o => {
//         const type = bookmakerEntities[o.bookmakerCode]?.bookmakerType;
//         return isBookieSportsBook(type as BookmakerType);
//       });
//     },
//   );

// export const selectExchangeOdds = (
//   betId: number,
// ): Selector<SubeventFeatureState, GridOdds[]> =>
//   createSelector(
//     selectOddsEntitiesByBetId(betId),
//     selectBookmakerEntities,
//     (oddsEntities, bookmakerEntities) => {
//       if (typeof bookmakerEntities === 'undefined') {
//         return [] as GridOdds[];
//       }
//       return Object.values(oddsEntities).filter(o => {
//         const type = bookmakerEntities[o.bookmakerCode]?.bookmakerType;
//         return isBookieExchange(type as BookmakerType);
//       });
//     },
//   );

// const bestOddsSportsbooks = ({
//   betId,
// }: {
//   betId: number;
// }): Selector<
//   SubeventFeatureState,
//   {
//     bestOdds: number;
//     bestOddsFractional: string;
//     bet: GridBet;
//     betId: number;
//   }
// > => {
//   return createSelector(
//     selectSportbooksOdds(betId),
//     selectBetEntities,
//     (odds, betEntities) => {
//       const relevantOdds = odds.filter(o => isValidForBestOdds(o));
//       const { bestOdds, bestOddsFractional } = calcBestOdds(relevantOdds);
//       return {
//         betId,
//         bet: betEntities[betId] as GridBet,
//         bestOdds,
//         bestOddsFractional,
//       };
//     },
//   );
// };

// const bestOddsExchanges = ({
//   betId,
// }: {
//   betId: number;
// }): Selector<
//   SubeventFeatureState,
//   {
//     bestOdds: number;
//     bestOddsFractional: string;
//     bet: GridBet;
//     betId: number;
//   }
// > => {
//   return createSelector(
//     selectExchangeOdds(betId),
//     selectBetEntities,
//     (odds, betEntities) => {
//       const relevantOdds = odds.filter(o => isValidForBestOdds(o));
//       const { bestOdds, bestOddsFractional } = calcBestOdds(relevantOdds);
//       return {
//         betId,
//         bet: betEntities[betId] as GridBet,
//         bestOdds,
//         bestOddsFractional,
//       };
//     },
//   );
// };

// export const selectFilteredMarketIds: Selector<
//   SubeventFeatureState,
//   number[]
// > = createSelector(selectAllMarkets, selectedMarketFilterId, (markets, key) => {
//   if (typeof key === 'undefined') {
//     return markets.map(m => m.ocMarketId);
//   }

//   return markets
//     .filter(m => (m.marketFilters || []).includes(key))
//     .map(m => m.ocMarketId);
// });

// export const selectMarketIdsAndNames: Selector<
//   SubeventFeatureState,
//   {
//     id: number;
//     typeName: string;
//   }[]
// > = createSelector(selectAllMarkets, markets => {
//   return markets.map(m => ({
//     id: m.ocMarketId,
//     name: m.marketName,
//     typeName: m.marketTypeName,
//   }));
// });

// export const selectBetsIdsForMarket = (
//   marketId: number,
// ): Selector<SubeventFeatureState, number[]> => {
//   return createCachedSelector({ marketId }, betIdsForMarkets);
// };

// export const selectBestOddsSportsbooks = (
//   betId: number,
// ): Selector<
//   SubeventFeatureState,
//   {
//     bestOdds: number;
//     bestOddsFractional: string;
//     bet: GridBet;
//     betId: number;
//   }
// > => {
//   return createCachedSelector({ betId }, bestOddsSportsbooks);
// };

// export const selectBestSportbooksBookies = (
//   betId: number,
// ): Selector<
//   SubeventFeatureState,
//   {
//     bestOdds: number;
//     bestOddsFractional: string;
//     bookies: string[];
//   }
// > =>
//   createSelector(selectSportbooksOdds(betId), sportbooksOdds => {
//     const filtered = sportbooksOdds.filter(o => isValidForBestOdds(o));
//     return calcBestOdds(filtered);
//   });

// export const selectBestOddsExchanges = (
//   betId: number,
// ): Selector<
//   SubeventFeatureState,
//   {
//     bestOdds: number;
//     bestOddsFractional: string;
//     bet: GridBet;
//     betId: number;
//   }
// > => createCachedSelector({ betId }, bestOddsExchanges);

// export const selectHasBetSportsbookOdds = (
//   betId: number,
//   includeFailedOdds = true,
// ): Selector<SubeventFeatureState, boolean> =>
//   createSelector(selectSportbooksOdds(betId), odds =>
//     includeFailedOdds ? odds.length > 0 : odds.some(isOddsActive),
//   );

// export const selectHasBetExchangeOdds = (
//   betId: number,
//   includeFailedOdds = true,
// ): Selector<SubeventFeatureState, boolean> =>
//   createSelector(selectExchangeOdds(betId), odds =>
//     includeFailedOdds ? odds.length > 0 : odds.some(isOddsActive),
//   );

// export const selectBestOddsSportsbooksText = (
//   betId: number,
// ): Selector<SubeventFeatureState, string | number> => {
//   return createSelector(
//     selectBestOddsSportsbooks(betId),
//     selectOddsFormat,
//     ({ bestOdds, bestOddsFractional }, format) => {
//       return format === 'traditional' || format === 'fractional'
//         ? bestOddsFractional
//         : roundOdds(bestOdds);
//     },
//   );
// };

// export const selectSportsbooksAndBestOdds = (
//   betIds: number[],
// ): Selector<
//   SubeventFeatureState,
//   {
//     bestOdds: number;
//     bestOddsFractional: string;
//     bet: GridBet;
//   }[]
// > => {
//   // casted createSelector as any because redux doesn't like spread operator in its arguments
//   // local build is failing even with ts-ignore
//   return (createSelector as any)(
//     ...betIds.map(selectBestOddsSportsbooks),
//     (
//       ...betsWithBestOdds: {
//         bestOdds: number;
//         bestOddsFractional: string;
//         bet: GridBet;
//         betId: number;
//       }[]
//     ) => {
//       return betsWithBestOdds.reduce(
//         (acc, betWithBestOdds) => {
//           acc.push(betWithBestOdds);
//           return acc;
//         },
//         [] as Array<{
//           bestOdds: number;
//           bestOddsFractional: string;
//           bet: GridBet;
//           betId: number;
//         }>,
//       );
//     },
//   );
// };

// export const selectSportsbooksBetIdsAndBestOdds = (
//   betIds: number[],
// ): Selector<
//   SubeventFeatureState,
//   {
//     [betId: string]: {
//       bestOdds: number;
//       bestOddsFractional: string;
//       bet: GridBet;
//       betId: number;
//     };
//   }
// > => {
//   // casted createSelector as any because redux doesn't like spread operator in its arguments
//   // local build is failing even with ts-ignore
//   return (createSelector as any)(
//     ...betIds.map(selectBestOddsSportsbooks),
//     (
//       ...betsWithBestOdds: {
//         bestOdds: number;
//         bestOddsFractional: string;
//         bet: GridBet;
//         betId: number;
//       }[]
//     ) => {
//       return betsWithBestOdds.reduce((acc, betWithBestOdds) => {
//         return {
//           ...acc,
//           [betWithBestOdds.bet.ocBetId]: betWithBestOdds,
//         };
//       }, {});
//     },
//   );
// };

// export interface BookieWithBets extends GridBookmaker {
//   betIds: {
//     [key: string]: GridOdds;
//   };
// }

// export const selectBetsWithBestOdds = (
//   betIds: number[],
// ): Selector<
//   SubeventFeatureState,
//   Array<
//     GridBet & {
//       bestOdds: number;
//       bestOddsFractional: string;
//       bestOddsText: string | number;
//     }
//   >
// > =>
//   createSelector(
//     selectSportsbooksAndBestOdds(betIds),
//     selectOddsFormat,
//     selectOddsEntitiesByBetIds(betIds),
//     (bets, format, oddEntities) => {
//       return bets
//         .map(b => {
//           return {
//             ...b.bet,
//             bestOdds: b.bestOdds,
//             bestOddsFractional: b.bestOddsFractional,
//             bestOddsText:
//               format === 'traditional' || format === 'fractional'
//                 ? b.bestOddsFractional
//                 : roundOdds(b.bestOdds),
//           };
//         })
//         .filter(b => {
//           const odds = Object.values(oddEntities[Number(b.ocBetId)] || {});
//           return odds.some(isOddsActive);
//         })
//         .sort((a, b) => {
//           if (
//             isOddsInvalidForSorting({
//               odds: a.bestOddsFractional,
//               oddsDecimal: a.bestOdds,
//             })
//           ) {
//             return 1;
//           }
//           if (
//             isOddsInvalidForSorting({
//               odds: b.bestOddsFractional,
//               oddsDecimal: b.bestOdds,
//             })
//           ) {
//             return -1;
//           }
//           return a.bestOdds - b.bestOdds;
//         });
//     },
//   );

// export const selectExchangesBetIdsAndBestOdds = (
//   betIds: number[],
// ): Selector<
//   SubeventFeatureState,
//   {
//     [betId: string]: {
//       bestOdds: number;
//       bestOddsFractional: string;
//       bet: GridBet;
//       betId: number;
//     };
//   }
// > => {
//   // casted createSelector as any because redux doesn't like spread operator in its arguments
//   // local build is failing even with ts-ignore
//   return (createSelector as any)(
//     ...betIds.map(selectBestOddsExchanges),
//     (
//       ...bestOdds: {
//         bestOdds: number;
//         bestOddsFractional: string;
//         bet: GridBet;
//         betId: number;
//       }[]
//     ) => {
//       return bestOdds.reduce((obj, oddsEntities, index) => {
//         const betId = betIds[index];
//         return { ...obj, [betId]: oddsEntities };
//       }, {});
//     },
//   );
// };

// const selectBetsAndBestOdds = (betIds: number[]) =>
//   createSelector(
//     selectSportsbooksBetIdsAndBestOdds(betIds),
//     selectExchangesBetIdsAndBestOdds(betIds),
//     selectOddsEntitiesByBetIds(betIds),
//     (sportsbooks, exchanges, oddsEntities) => {
//       return Object.keys(exchanges).reduce(
//         (acc, betId) => {
//           const sportsbook = {
//             betId: Number(betId),
//             bet: sportsbooks[betId]?.bet,
//             bestOddsSportbook: sportsbooks[betId]?.bestOdds,
//             bestOddsSportsbookFractional:
//               sportsbooks[betId]?.bestOddsFractional,
//           };

//           const exchange = {
//             bestOddsExchange: exchanges[betId]?.bestOdds,
//             bestOddsExchangeFractional: exchanges[betId]?.bestOddsFractional,
//           };

//           const odds = Object.values(oddsEntities[Number(betId)] || {});
//           const failed = !odds.some(isOddsActive);
//           return {
//             ...acc,
//             [betId]: { ...sportsbook, ...exchange, failed },
//           };
//         },
//         {} as {
//           [betId: string]: {
//             bestOddsExchange: number | undefined;
//             bestOddsExchangeFractional: string | undefined;
//             bestOddsSportbook: number | undefined;
//             bestOddsSportsbookFractional: string | undefined;
//             bet: GridBet;
//             betId: number;
//             failed: boolean;
//           };
//         },
//       );
//     },
//   );

// // TODO: test with best odds from sportsbooks / from exchanges
// // TODO: test with invalid values: nll, undefined, 0, 'SP'
// export const selectSortedBetIds = (
//   betIds: number[],
// ): Selector<SubeventFeatureState, string[]> => {
//   return createSelector(selectBetsAndBestOdds(betIds), betsAndBestOdds => {
//     return Object.keys(betsAndBestOdds)
//       .filter(betId => !betsAndBestOdds[betId].failed)
//       .map(betId => {
//         let oddsDecimal = betsAndBestOdds[betId].bestOddsSportbook;
//         let odds = betsAndBestOdds[betId].bestOddsSportsbookFractional;

//         if (isOddsInvalidForSorting({ oddsDecimal, odds })) {
//           // invalid switch to exchange
//           oddsDecimal = betsAndBestOdds[betId].bestOddsExchange;
//           odds = betsAndBestOdds[betId].bestOddsExchangeFractional;
//         }

//         if (isOddsInvalidForSorting({ oddsDecimal, odds })) {
//           return { betId, weight: Infinity }; // invalid at the end
//         }

//         return { betId, weight: oddsDecimal };
//       })
//       .sort((a, b) => {
//         return typeof a.weight === 'undefined'
//           ? 1
//           : typeof b.weight === 'undefined'
//           ? -1
//           : a.weight - b.weight;
//       })
//       .map(v => v.betId);
//   });
// };

// type betIdAndDecimal = {
//   betId: number;
//   oddsDecimal: number;
// };

// export const selectSortedBetIdsByName = (
//   betIds: number[],
// ): Selector<SubeventFeatureState, number[]> => {
//   return createSelector(
//     selectBetsAndBestOdds(betIds),
//     selectHomeTeamName,
//     selectAwayTeamName,
//     (betsAndBestOdds, home, away) => {
//       const invalidBets: betIdAndDecimal[] = [];
//       const homeBets: betIdAndDecimal[] = [];
//       const awayBets: betIdAndDecimal[] = [];
//       const rest: betIdAndDecimal[] = [];

//       const notFailedBetAndBestOdds = Object.values(betsAndBestOdds).filter(
//         b => !b.failed,
//       );

//       for (const {
//         bestOddsExchange,
//         bestOddsExchangeFractional,
//         bestOddsSportbook,
//         bestOddsSportsbookFractional,
//         bet,
//         betId,
//       } of notFailedBetAndBestOdds) {
//         const isHomeTeam = bet.betName === home;
//         const isAwayTeam = bet.betName === away;

//         let decimal = bestOddsSportbook;
//         let odds = bestOddsSportsbookFractional;

//         if (
//           isOddsInvalidForSorting({
//             oddsDecimal: decimal,
//             odds,
//           })
//         ) {
//           // invalid switch to exchange
//           decimal = bestOddsExchange;
//           odds = bestOddsExchangeFractional;
//         }

//         const invalid = isOddsInvalidForSorting({
//           oddsDecimal: decimal,
//           odds,
//         });

//         switch (true) {
//           case invalid: {
//             invalidBets.push({ betId, oddsDecimal: decimal as number });
//             break;
//           }
//           case isHomeTeam: {
//             homeBets.push({ betId, oddsDecimal: decimal as number });
//             break;
//           }
//           case isAwayTeam: {
//             awayBets.push({ betId, oddsDecimal: decimal as number });
//             break;
//           }
//           default: {
//             rest.push({ betId, oddsDecimal: decimal as number });
//           }
//         }
//       }

//       return [
//         ...homeBets.sort((a, b) => a.oddsDecimal - b.oddsDecimal),
//         ...rest.sort((a, b) => a.oddsDecimal - b.oddsDecimal),
//         ...awayBets.sort((a, b) => a.oddsDecimal - b.oddsDecimal),
//         ...invalidBets,
//       ].map(v => v.betId);
//     },
//   );
// };

// export const selectOddsText = (
//   betId: number,
//   bookieCode: string,
// ): Selector<SubeventFeatureState, string | number | undefined> => {
//   return createSelector(
//     selectOddsByBetIdAndBookie(betId, bookieCode),
//     selectOddsFormat,
//     (odds, format) => {
//       if (typeof odds === 'undefined') {
//         return undefined;
//       }

//       if (!isOddsActive(odds)) {
//         return undefined;
//       }

//       const { odds: oddsTraditional, oddsDecimal } = odds;

//       if (oddsTraditional === 'SP' || !oddsTraditional || !oddsDecimal) {
//         return 'SP';
//       }

//       const [numerator, denominator] = oddsTraditional.split('/');
//       const oddsTrad =
//         oddsTraditional.length > 5
//           ? `${numerator}/ ${denominator}`
//           : oddsTraditional;

//       return format === 'traditional' || format === 'fractional'
//         ? oddsTrad
//         : roundOdds(oddsDecimal);
//     },
//   );
// };

// export const selectNumberOfOddsByBetId = (
//   betId: number,
//   excludeFailed = true,
//   excludeZero = true,
// ): Selector<SubeventFeatureState, number> => {
//   return createSelector(
//     selectBookmakerEntities,
//     selectOddsByBetId(betId),
//     (bookmakerEntities, odds) => {
//       if (typeof bookmakerEntities === 'undefined') {
//         return 0;
//       }
//       return odds
//         .filter(o => typeof bookmakerEntities[o.bookmakerCode] !== 'undefined')
//         .filter(o => (excludeFailed ? isOddsActive(o) : true))
//         .filter(o =>
//           excludeZero ? isOddsActive(o) && o.oddsDecimal !== 0 : true,
//         ).length;
//     },
//   );
// };

// export const selectSportbookCodesSortedByBestPrice = (
//   betId: number,
// ): Selector<SubeventFeatureState, string[]> => {
//   return createSelector(
//     selectSportsbookCodes,
//     selectOddsEntitiesByBetId(betId),
//     selectPreferredBookie,
//     (bookmakerIds, odds, bookiePreference) => {
//       return bookmakerIds
//         .map((id, index) => ({ id, index }))
//         .filter(({ id }) => typeof odds[id] !== 'undefined')
//         .sort(({ id: a, index: indexA }, { id: b, index: indexB }) => {
//           const oddsA = odds[a];
//           const oddsB = odds[b];

//           if (!isOddsActive(oddsA)) {
//             return 1;
//           }

//           if (!isOddsActive(oddsB)) {
//             return -1;
//           }

//           if (isOddsInvalidForSorting(oddsA)) {
//             return 1;
//           }
//           if (isOddsInvalidForSorting(oddsB)) {
//             return -1;
//           }

//           const { oddsDecimal: oddsDecimalA } = oddsA;
//           const { oddsDecimal: oddsDecimalB } = oddsB;

//           if (oddsDecimalA !== null && oddsDecimalB !== null) {
//             if (oddsDecimalA !== oddsDecimalB) {
//               return oddsDecimalB - oddsDecimalA;
//             }
//           }

//           if (a === bookiePreference) {
//             return -1;
//           }
//           if (b === bookiePreference) {
//             return 1;
//           }

//           return indexA - indexB;
//         })
//         .map(({ id }) => id);
//     },
//   );
// };

// export const selectExchangeCodesSortedByBestPrice = (
//   betId: number,
// ): Selector<SubeventFeatureState, string[]> => {
//   return createSelector(
//     selectExchangeCodes,
//     selectOddsEntitiesByBetId(betId),
//     selectPreferredBookie,
//     (bookmakerIds, odds, bookiePreference) => {
//       return bookmakerIds
//         .map((id, index) => ({ id, index }))
//         .filter(({ id }) => typeof odds[id] !== 'undefined')
//         .sort(({ id: a, index: indexA }, { id: b, index: indexB }) => {
//           const oddsA = odds[a];
//           const oddsB = odds[b];

//           if (!isOddsActive(oddsA)) {
//             return 1;
//           }

//           if (!isOddsActive(oddsB)) {
//             return -1;
//           }

//           if (isInvalidForSorting(oddsA)) {
//             return 1;
//           }
//           if (isInvalidForSorting(oddsB)) {
//             return -1;
//           }

//           const { oddsDecimal: oddsDecimalA } = oddsA;
//           const { oddsDecimal: oddsDecimalB } = oddsB;

//           if (oddsDecimalA !== null && oddsDecimalB !== null) {
//             if (oddsDecimalA !== oddsDecimalB) {
//               return oddsDecimalB - oddsDecimalA;
//             }
//           }

//           if (a === bookiePreference) {
//             return -1;
//           }
//           if (b === bookiePreference) {
//             return 1;
//           }

//           return indexA - indexB;
//         })
//         .map(({ id }) => id);
//     },
//   );
// };

// export const selectShouldFetchData = (
//   marketId: number,
// ): Selector<SubeventFeatureState, boolean> =>
//   createSelector(
//     selectAreMarketDataPending(marketId),
//     selectBetsIdsForMarket(marketId),
//     (isPending, betIds) => !isPending && betIds.length === 0,
//   );

// export const selectMarketsToConnectDiffusion: Selector<
//   SubeventFeatureState,
//   number[]
// > = createSelector(
//   selectMarketsRequestsEntities,
//   selectMarketsInViewPort,
//   selectReadyToConnectMarkets,
//   (marketRequestsEntities, marketsInViewport, marketsReadyToConnect) => {
//     // 1. start from ready-to-connect markets (these are manually set or from expand/close a market)
//     // 2. keep the ones inside viewport (intersection observer)
//     // 3. keep the markets that requests aren't on flight

//     return marketsReadyToConnect
//       .filter(m => marketsInViewport.includes(m))
//       .filter(
//         m =>
//           marketRequestsEntities[m]?.status === 'success' ||
//           marketRequestsEntities[m]?.status === 'prefetched',
//       );
//   },
// );

// export const selectBookiesWithActiveOddsInMarket = (
//   marketId: number,
// ): Selector<SubeventFeatureState, string[]> =>
//   createSelector(
//     selectBetsIdsForMarket(marketId),
//     getOddsState,
//     selectBookmakerIds,
//     (betIds, state: OddsState, bookmakerIds) => {
//       const bookieCodesWithActiveOddsInThisMarket = Object.keys(state)
//         .map(Number)
//         .filter(betId => betIds.includes(betId))
//         .map(betId => state[betId] ?? {})
//         .map(oddsDict => Object.values(oddsDict))
//         .reduce((acc, odds) => {
//           acc.push(...odds);
//           return acc;
//         }, new Array<GridOdds>())
//         .filter(isOddsActive)
//         .map(odds => odds.bookmakerCode);

//       const uniqueBookies = [...new Set(bookieCodesWithActiveOddsInThisMarket)];

//       // keep the original bookies order
//       const ordered = (bookmakerIds as string[]).filter(bookieCode =>
//         uniqueBookies.includes(bookieCode),
//       );

//       return ordered;
//     },
//   );

// export const selectBetIdsWithActiveOdds = (
//   marketId: number,
//   bookieCode: string | undefined,
// ): Selector<SubeventFeatureState, number[]> =>
//   createSelector(
//     selectBetsIdsForMarket(marketId),
//     getOddsState,
//     (betIds, oddsState) => {
//       if (typeof bookieCode === 'undefined') {
//         return new Array<number>();
//       }

//       return betIds
//         .map(betId => oddsState[betId])
//         .filter(oddsDict => Boolean(oddsDict))
//         .reduce((acc, cur) => {
//           acc.push(...Object.values(cur));
//           return acc;
//         }, new Array<GridOdds>())
//         .filter(({ bookmakerCode }) => bookieCode === bookmakerCode)
//         .filter(isOddsActive)
//         .map(odds => odds.betId);
//     },
//   );

// export const selectHasOddsForMarketAndBookie = (
//   marketId: number,
//   bookieCode: string,
// ): Selector<SubeventFeatureState, boolean> =>
//   createSelector(
//     selectBetsIdsForMarket(marketId),
//     getOddsState,
//     (betIds, oddsState) => {
//       return betIds
//         .map(betId => oddsState[betId])
//         .filter(oddsDict => Boolean(oddsDict))
//         .map(oddsDict => oddsDict[bookieCode])
//         .some(
//           o =>
//             typeof o !== 'undefined' &&
//             isOddsActive(o) &&
//             Boolean(o.oddsDecimal) &&
//             Boolean(o.odds) &&
//             o.odds !== 'SP',
//         );
//     },
//   );
