'use strict';

function template(item) {
  var element = `<tr id="${item.event_id}" class="event">
                     <td>${item.event_name}</td>
                     <td class="members">${item.members}</td>
                     <td class="total-cost">${item.total_cost}</td>
                     <td class="event-date">${item.date}</td>
                     <td><button class="delete"><span class="glyphicon glyphicon-scissors"></span></button></td>
                   </tr>`;
  return element;
}
